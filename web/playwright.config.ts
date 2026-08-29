import { defineConfig, devices } from '@playwright/test';

/**
 * E2E tests run against the Vite dev server backed by the Firebase emulator
 * suite (auth, firestore, functions, storage). Start them with `npm run e2e`
 * from the repository root, which wraps this in `firebase emulators:exec`.
 */
const emulatorEnv = {
  VITE_USE_EMULATORS: 'true',
  VITE_FIREBASE_API_KEY: 'demo-api-key',
  VITE_FIREBASE_AUTH_DOMAIN: 'demo-coffeniya.firebaseapp.com',
  VITE_FIREBASE_PROJECT_ID: 'demo-coffeniya',
  VITE_FIREBASE_STORAGE_BUCKET: 'demo-coffeniya.appspot.com',
  VITE_FIREBASE_MESSAGING_SENDER_ID: '000000000000',
  VITE_FIREBASE_APP_ID: '1:000000000000:web:0000000000000000000000',
};

export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Sandboxed environments can point at a preinstalled Chromium
        // instead of downloading a matching browser build.
        launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
          ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
          : {},
      },
    },
  ],
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 5173 --strictPort',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: emulatorEnv,
  },
});
