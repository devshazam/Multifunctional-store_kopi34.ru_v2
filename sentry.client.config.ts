// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4186fbc8e9d37d165cb530485062e655@o4507668567556096.ingest.de.sentry.io/4508227818684496",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
