import { VideoTexture } from "three";
import { DirectionalLight } from "three";
import { PerspectiveCamera, sRGBEncoding, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

import { MainScene } from "./scene/mainScene";

export class App {
  constructor(container) {
    if (container) this.otherInit(container);
  }
  otherInit(container) {
    this.container = container;
    this.gltf = null;
    this.camera = new PerspectiveCamera(
      60,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      500
    );
    this.camera.position.y = 5;
    this.camera.position.x = 10;
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.physicallyCorrectLights = true;
    this.container.appendChild(this.renderer.domElement);

    this.control = new OrbitControls(this.camera, this.container);
    this.control.rotateSpeed = 0.4;
    this.control.dampingFactor = 0.5;
    this.mainScene = new MainScene();

    this.onResized();
    this.render();
  }

  removeElement(element) {
    element.srcElement.remove();
  }
  addVideo() {
    const videeo = document.getElementById("video");
    videeo.play();
    videeo.addEventListener("play", function () {
      this.currentTime = 3;
    });
    const texture = new VideoTexture(videeo);
    this.mainScene.ground.addVideo(texture);
  }

  createLight() {
    const light = new DirectionalLight("red");
    light.position.set(0, 0, 0).normalize();
    this.mainScene.add(light);
  }

  onResized() {
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
  }
  saveString(element, name) {
    const link = document.createElement("a");

    const binaryData = [];
    binaryData.push(element);

    link.href = window.URL.createObjectURL(
      new File(binaryData, { type: "application/zip" })
    );
    link.download = name;
    link.click();
  }
  createGltf() {
    const exporter = new GLTFExporter();
    exporter.parse(
      this.mainScene,
      (result) => {
        const output = JSON.stringify(result, null, 2);
        this.saveString(output, "/scene_2.gltf");
      },
      () => console.log("error"),
      {}
    );
  }
  setGltf(gltf) {
    console.log("set awui", gltf);
    this.myGltf = gltf;
  }
  getGltf() {
    console.log("get", this.myGltf);
    return this.myGltf;
  }

  render() {
    this.renderer.render(this.mainScene, this.camera);
    this.mainScene.renderAnimations();
    this.control.update();
    this.renderer.setAnimationLoop(() => this.render());
  }
}
