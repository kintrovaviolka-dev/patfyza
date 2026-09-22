## 2026-09-22 - Network Requests in Playwright Testing

**Learning:** When performing UI verification of network requests with Playwright, you may run into CORS or general network failures if the external endpoint you are calling is retired or blocked. You can still verify that code branches (like `localStorage` caching logic) execute correctly by seeding values in the cache via `page.evaluate()` and then verifying no network requests are dispatched in subsequent page loads.

**Action:** When an external API endpoint is broken, simulate caching conditions by artificially setting up state (e.g., in `localStorage`) via `page.evaluate()` to verify that the conditional code logic works correctly independently of network conditions.
