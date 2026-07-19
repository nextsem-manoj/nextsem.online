# 📦 Nextsem Academy — Version 18 Release Plan
> **Current**: v17 (2.2.4) — Beta Review  
> **Next**: v18 (2.3.0) — Target: After v17 Production Approval

---

## 🔴 Priority 1 — Critical Fixes (Must Have)

### 1. Remaining HTML Lessons Multilingual MCQ
- **Issue**: Only 5/100 HTML lessons have full `english/hinglish/hindi` exercises
- **Fix**: Batch update lessons 6–100 in `src/data/htmlLessonsData.ts` with `MultilingualExercise` format
- **Files**: `src/data/htmlLessonsData.ts`

### 2. HtmlLessonClient — Rewarded Ad for PDF Download
- **Issue**: HTML lessons ka PDF download button nahi hai (CLI lessons mein hai)
- **Fix**: Add same rewarded ad PDF download button to `HtmlLessonClient.tsx`
- **Ad ID**: `ca-app-pub-4242865347895866/5641573985`
- **Files**: `src/components/HtmlLessonClient.tsx`

### 3. AdMob `SMART_BANNER` Deprecation Warning
- **Warning**: `BannerAdSizeEnum.kt:15 — 'static field SMART_BANNER: AdSize' is deprecated`
- **Fix**: Upgrade `@capacitor-community/admob` to latest version
- **Command**: `npm update @capacitor-community/admob`

---

## 🟡 Priority 2 — Features (Should Have)

### 4. Gamification Context — Hearts/Lives System (Day 6 Roadmap)
- Add `GamificationContext` with:
  - ❤️ 5 Lives — lose 1 per wrong MCQ answer
  - 🔥 Daily Streak counter
  - ⭐ XP Points per lesson completed
- **Files**: `src/context/GamificationContext.tsx` (NEW)

### 5. AdMob Rewarded → Replenish Hearts (Day 7 Roadmap)
- When lives = 0, show "Watch Ad to get +3 lives" button
- Connect to AdMob Rewarded ad unit `5641573985`
- **Files**: `src/context/GamificationContext.tsx`, `src/components/HtmlLessonClient.tsx`

### 6. App Update Banner — v18 Feature Announcements
- Show animated modal/banner on Home page when app updates
- Direct links to new features
- **Files**: `src/components/UpdateBanner.tsx`

---

## 🟢 Priority 3 — Polish (Nice to Have)

### 7. CLI Dashboard — Unit Progress Ring
- Show circular progress indicator per unit (not just per lesson)
- Visual completion percentage badge on each unit card

### 8. HTML Lesson Dashboard — Back Navigation
- Add sticky "← Back to Dashboard" header in HTML lesson client
- Matches CLI lesson layout consistency

### 9. Profile Page — Mobile Layout Fix
- `ProfileClient.tsx` (currently open in editor) — audit for mobile overflow
- Ensure cards stack properly on small screens (< 375px)

### 10. CLI Lessons 16–20 — Add New Lessons
- Expand CLI curriculum beyond current 15 lessons
- Topics: `xcopy`, `robocopy`, `schtasks`, `wmic`, `netstat`
- Follow standard lesson template (multilingual + MCQ + SEO slug)

---

## 🔧 Technical Debt

| Item | Detail |
|---|---|
| `capacitor-cordova-android-plugins` | Gradle 9.0 incompatibility warning — update before Gradle 9 |
| `MarkCompleteButton.tsx` | Still routes to `/book/` for next chapter — update to `/html/` or `/cli/` |
| `SemmyAiWidget.tsx` | Native guard placed before hooks (React rules violation) — move to state |

---

## 📱 Build Notes for v18

```gradle
// android/app/build.gradle
versionCode 18
versionName "2.3.0"
```

```typescript
// capacitor.config.ts — keep server.url for slim AAB
server: {
  url: 'https://nextsem.online',
  cleartext: false,
  androidScheme: 'https',
}
```

**Expected AAB size**: ~5.8 MB (same slim approach)

---

## 📋 Play Store Checklist for v18

- [ ] All v17 beta issues resolved
- [ ] `@capacitor-community/admob` upgraded (fix SMART_BANNER warning)
- [ ] 20+ HTML lessons with full multilingual MCQs
- [ ] Gamification hearts system working
- [ ] Update banner showing v18 changes on Home page
- [ ] `gradlew bundleRelease` → verify size < 10MB
- [ ] Upload to Internal Testing → Promote to Closed → Promote to Production
