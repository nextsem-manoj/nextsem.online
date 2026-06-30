# Firebase Deployment Steps

This document outlines the steps taken to successfully deploy this Next.js project to Firebase Hosting as a static site. 

## 1. Configure Next.js for Static Export
Next.js was configured to generate a pure static build (`out/` directory) instead of relying on Node.js/Cloud Functions for server-side rendering.

Updated `next.config.ts` to include `output: 'export'`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export'
};

export default nextConfig;
```

## 2. Configure Firebase Hosting
We created a `firebase.json` file in the root directory to tell Firebase to serve files from the statically generated `out` folder:

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "cleanUrls": true
  }
}
```

We also created a `.firebaserc` file to link the local repository to the Firebase project:
```json
{
  "projects": {
    "default": "bca-nextsem"
  }
}
```

## 3. Build the Project
Before deploying, the project needs to be built to generate the static files:
```bash
npm run build
```
This generates an `out/` directory containing the optimized static HTML, CSS, and JS files.

## 4. Deploy to Firebase
Once the build is successful, the `out/` directory is deployed to Firebase Hosting using the Firebase CLI:
```bash
npx firebase-tools deploy
```
*(Note: If you have multiple projects, you can specify it explicitly: `npx firebase-tools deploy --project bca-nextsem`)*

## Live URL
The site is now live at: **https://bca-nextsem.web.app**
