import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@insomnia/kayak-strava-layout",
  app: () => System.import("@insomnia/kayak-strava-layout"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@insomnia/kayak-strava",
  app: () => System.import("@insomnia/kayak-strava"),
  activeWhen: ["/kayak-strava"],
});

start({
  urlRerouteOnly: true,
});
