import "./assets/css/normalize.css";

import { App } from "./assets/3D/app";

const container = document.getElementById("container");
const app = new App(container);
// const button = document.getElementById("check");

// button.addEventListener("click", () => {
//   app.createGltf();
//   //   src="shared-assets/models/NeilArmstrong.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp" seamless-poster shadow-intensity="1" camera-controls enable-pan
// });
document.getElementById("waiter").addEventListener("click", (element) => {
  app.removeElement(element);
  app.createLight();
  app.addVideo();
});

app.onResized();
