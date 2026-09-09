import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 90000,
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: [['list'],['html']],
  use: {
    baseURL: 'https://demoqa.com/',
    testIdAttribute: 'data-cy',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

