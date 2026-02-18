import { createApp } from "vue";
import "./style.css";
import Home from "./pages/Home.vue";
import { setupApp } from "./shared-setup";
import HoneybadgerVue from "@honeybadger-io/vue";

const config = {
  apiKey: "hbp_h6ndTfAOsHktG51jJfinqzfiKvrUzV4v8Ciu",
  environment: "production",
};

setupApp(Home, "#app", (app) => {
  app.use(HoneybadgerVue, config);
});
