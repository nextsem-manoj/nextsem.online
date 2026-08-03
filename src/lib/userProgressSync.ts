import { db } from "./firebase";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

export interface LastLesson {
  slug: string;
  title: string;
  subject: string; // "cli" | "html" | "git"
  lessonNumber: number;
  visitedAt: string;
}

/**
 * Normalizes email or user ID for Firestore document keys
 */
export function getCleanUserId(emailOrId?: string | null): string {
  if (!emailOrId) return "guest";
  return emailOrId.toLowerCase().trim().replace(/[^a-z0-9@._-]/g, "_");
}

/**
 * Saves lesson completion status to local cache and syncs to Firebase Firestore cloud.
 */
export async function saveLessonCompletionToCloud(
  userEmail: string | null | undefined,
  lessonSlugOrId: string | number,
  isCompleted = true
): Promise<Record<string, boolean>> {
  const key = String(lessonSlugOrId);
  const cleanId = getCleanUserId(userEmail);

  // 1. Instant local storage update (scoped to user email & global fallback)
  const currentSaved = loadLocalProgress(userEmail);
  if (isCompleted) {
    currentSaved[key] = true;
  } else {
    delete currentSaved[key];
  }

  saveLocalProgress(userEmail, currentSaved);

  // 2. Sync to Firestore if authenticated
  if (cleanId && cleanId !== "guest") {
    try {
      const userDocRef = doc(db, "users", cleanId);
      await setDoc(
        userDocRef,
        {
          email: userEmail,
          updatedAt: new Date().toISOString(),
          completedLessons: {
            [key]: isCompleted,
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.warn("Firestore progress sync failed, preserved in local cache:", err);
    }
  }

  return currentSaved;
}

/**
 * Loads user progress from local storage
 */
export function loadLocalProgress(userEmail?: string | null): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  const cleanId = getCleanUserId(userEmail);

  try {
    const rawScoped = localStorage.getItem(`nextsem_completed_chapters_${cleanId}`);
    if (rawScoped) {
      return JSON.parse(rawScoped);
    }
    const rawGlobal = localStorage.getItem("nextsem_completed_chapters");
    if (rawGlobal) {
      return JSON.parse(rawGlobal);
    }
  } catch (err) {
    console.error("Failed to parse local progress:", err);
  }

  return {};
}

/**
 * Saves user progress to local storage
 */
export function saveLocalProgress(userEmail: string | null | undefined, progress: Record<string, boolean>) {
  if (typeof window === "undefined") return;
  const cleanId = getCleanUserId(userEmail);
  const jsonStr = JSON.stringify(progress);

  try {
    localStorage.setItem("nextsem_completed_chapters", jsonStr);
    if (cleanId && cleanId !== "guest") {
      localStorage.setItem(`nextsem_completed_chapters_${cleanId}`, jsonStr);
    }
  } catch (err) {
    console.error("Failed to save local progress:", err);
  }
}

/**
 * Syncs and merges cloud progress from Firestore on login or device mount.
 */
export async function syncCloudProgressOnLogin(userEmail: string): Promise<Record<string, boolean>> {
  const cleanId = getCleanUserId(userEmail);
  if (!cleanId || cleanId === "guest") return loadLocalProgress(userEmail);

  const localProg = loadLocalProgress(userEmail);

  try {
    const userDocRef = doc(db, "users", cleanId);
    const snap = await getDoc(userDocRef);

    if (snap.exists()) {
      const data = snap.data();
      const cloudProg: Record<string, boolean> = data.completedLessons || {};

      // Merge local and cloud progress (union of completed lessons)
      const mergedProg: Record<string, boolean> = { ...localProg, ...cloudProg };

      saveLocalProgress(userEmail, mergedProg);

      // Push merged state back to cloud if local had extra completed items
      if (Object.keys(mergedProg).length > Object.keys(cloudProg).length) {
        await setDoc(userDocRef, { completedLessons: mergedProg }, { merge: true });
      }

      return mergedProg;
    } else {
      // First login on new device: upload any local offline progress if present
      if (Object.keys(localProg).length > 0) {
        await setDoc(userDocRef, { email: userEmail, completedLessons: localProg }, { merge: true });
      }
    }
  } catch (err) {
    console.warn("Error syncing cloud progress from Firestore:", err);
  }

  return localProg;
}

/**
 * Listens for real-time Firestore updates across multi-device sessions.
 */
export function subscribeToRealtimeUserProgress(
  userEmail: string,
  onUpdate: (progress: Record<string, boolean>) => void
) {
  const cleanId = getCleanUserId(userEmail);
  if (!cleanId || cleanId === "guest") return () => {};

  const userDocRef = doc(db, "users", cleanId);
  return onSnapshot(userDocRef, (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      const cloudProg: Record<string, boolean> = data.completedLessons || {};
      const merged = { ...loadLocalProgress(userEmail), ...cloudProg };
      saveLocalProgress(userEmail, merged);
      onUpdate(merged);
    }
  });
}

/**
 * Saves the last visited lesson for the "Continue Where You Left Off" feature.
 */
export async function saveLastLesson(
  userEmail: string | null | undefined,
  lesson: LastLesson
): Promise<void> {
  const cleanId = getCleanUserId(userEmail);

  // Always save locally
  try {
    localStorage.setItem(`nextsem_last_lesson_${cleanId}`, JSON.stringify(lesson));
    localStorage.setItem("nextsem_last_lesson", JSON.stringify(lesson));
  } catch {}

  // Save to Firestore
  if (cleanId && cleanId !== "guest") {
    try {
      const userDocRef = doc(db, "users", cleanId);
      await setDoc(
        userDocRef,
        {
          lastLesson: lesson,
          lastActiveAt: lesson.visitedAt,
        },
        { merge: true }
      );
    } catch (err) {
      console.warn("Failed to save last lesson to cloud:", err);
    }
  }
}

/**
 * Reads the last visited lesson from local storage or Firestore.
 */
export function getLastLessonLocal(userEmail?: string | null): LastLesson | null {
  if (typeof window === "undefined") return null;
  const cleanId = getCleanUserId(userEmail);
  try {
    const raw =
      localStorage.getItem(`nextsem_last_lesson_${cleanId}`) ||
      localStorage.getItem("nextsem_last_lesson");
    if (raw) return JSON.parse(raw) as LastLesson;
  } catch {}
  return null;
}

/**
 * Gets last lesson from Firestore (async).
 */
export async function getLastLessonCloud(userEmail: string): Promise<LastLesson | null> {
  const cleanId = getCleanUserId(userEmail);
  if (!cleanId || cleanId === "guest") return null;
  try {
    const snap = await getDoc(doc(db, "users", cleanId));
    if (snap.exists()) {
      const data = snap.data();
      return (data.lastLesson as LastLesson) || null;
    }
  } catch {}
  return null;
}

/**
 * Saves milestone badge award flag so it shows only once.
 */
export async function saveMilestoneAwarded(
  userEmail: string | null | undefined,
  milestone: number
): Promise<void> {
  const cleanId = getCleanUserId(userEmail);
  try {
    localStorage.setItem(`nextsem_milestone_${milestone}_${cleanId}`, "true");
  } catch {}
  if (cleanId && cleanId !== "guest") {
    try {
      await setDoc(
        doc(db, "users", cleanId),
        { [`milestoneAwarded_${milestone}`]: true },
        { merge: true }
      );
    } catch {}
  }
}

/**
 * Checks if a milestone badge was already awarded.
 */
export function isMilestoneAwarded(
  userEmail: string | null | undefined,
  milestone: number
): boolean {
  if (typeof window === "undefined") return false;
  const cleanId = getCleanUserId(userEmail);
  return localStorage.getItem(`nextsem_milestone_${milestone}_${cleanId}`) === "true";
}
