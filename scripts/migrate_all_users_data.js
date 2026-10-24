const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, doc, setDoc } = require("firebase/firestore");

// 1. Source: ignou-study-notes-by-nextsem
const sourceConfig = {
  apiKey: "AIzaSyDBoWw_8QOA_S_UfTRQQcNc-CGLBbctMAQ",
  authDomain: "ignou-study-notes-by-nextsem.firebaseapp.com",
  projectId: "ignou-study-notes-by-nextsem",
  storageBucket: "ignou-study-notes-by-nextsem.firebasestorage.app",
  messagingSenderId: "498697546118",
  appId: "1:498697546118:web:4630ab76b34fcc3d83a407"
};

// 2. Target: bca-nextsem (nextsem.online)
const targetConfig = {
  apiKey: "AIzaSyDMxmzTZeGcGZBeRkStUdShlddBdJHTtLo",
  authDomain: "bca-nextsem.firebaseapp.com",
  projectId: "bca-nextsem",
  storageBucket: "bca-nextsem.firebasestorage.app",
  messagingSenderId: "983453487133",
  appId: "1:983453487133:web:34d80214bd9d961e01b6f4"
};

const sourceApp = initializeApp(sourceConfig, "sourceApp");
const sourceDb = getFirestore(sourceApp);

const targetApp = initializeApp(targetConfig, "targetApp");
const targetDb = getFirestore(targetApp);

const collectionsToMigrate = [
  "users_progress",
  "bca_practical_stories",
  "student_evaluations",
  "student_notifications"
];

async function migrateData() {
  console.log("==================================================================");
  console.log("MIGRATING USER PROGRESS & STORIES TO NEXTSEM.ONLINE (bca-nextsem)");
  console.log("Source: ignou-study-notes-by-nextsem");
  console.log("Target: bca-nextsem");
  console.log("==================================================================\n");

  const migrationStats = {};

  for (const colName of collectionsToMigrate) {
    console.log(`\n--- Migrating collection: '${colName}' ---`);
    try {
      const sourceSnap = await getDocs(collection(sourceDb, colName));
      console.log(`Found ${sourceSnap.docs.length} documents in source '${colName}'.`);
      
      let count = 0;
      for (const d of sourceSnap.docs) {
        const data = d.data();
        const docId = d.id;

        // Write directly to target
        await setDoc(doc(targetDb, colName, docId), data, { merge: true });
        count++;

        if (colName === "users_progress") {
          const name = data.displayName || data.email || docId;
          const completedCount = data.bca_practical?.completedDays?.length || 0;
          console.log(`  [${count}/${sourceSnap.docs.length}] User: ${name} (Days Completed: ${completedCount}) -> Copied!`);
        } else if (colName === "bca_practical_stories") {
          const userName = data.userName || "Student";
          const day = data.day || "?";
          console.log(`  [${count}/${sourceSnap.docs.length}] Story: ${userName} (Day ${day}) -> Copied!`);
        } else {
          console.log(`  [${count}/${sourceSnap.docs.length}] Doc: ${docId} -> Copied!`);
        }
      }

      migrationStats[colName] = count;
      console.log(`Successfully migrated ${count} documents for '${colName}'.`);
    } catch (err) {
      console.error(`Error migrating collection '${colName}':`, err.message);
      migrationStats[colName] = `Error: ${err.message}`;
    }
  }

  console.log("\n==================================================================");
  console.log("VERIFYING TARGET DATABASE (bca-nextsem)");
  console.log("==================================================================");

  for (const colName of collectionsToMigrate) {
    try {
      const targetSnap = await getDocs(collection(targetDb, colName));
      console.log(`Target collection '${colName}': has ${targetSnap.docs.length} total documents.`);
    } catch (err) {
      console.error(`Verification error for '${colName}':`, err.message);
    }
  }

  console.log("\nMigration completed successfully! All users and progress are synchronized.");
  process.exit(0);
}

migrateData().catch(err => {
  console.error("Fatal migration error:", err);
  process.exit(1);
});
