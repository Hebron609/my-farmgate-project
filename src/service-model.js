import { h } from "vue";
import ServiceModel from "./pages/ServiceModel.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

const params = new URLSearchParams(window.location.search);
const serviceModel = params.get("model") === "farm" ? "farm" : "invest";

setupApp(h(ServiceModel, { serviceModel }), "#app");
