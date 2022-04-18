import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@insomnia/kayak-strava-layout",
  app: () => System.import("@insomnia/kayak-strava-layout"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
