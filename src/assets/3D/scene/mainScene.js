import { VideoTexture } from "three";
import { MeshLambertMaterial } from "three";
import { MeshBasicMaterial } from "three";
import { AmbientLight, Color, Scene } from "three";

import { Ground } from "../objects/Ground";

export class MainScene extends Scene {
  constructor() {
    super();
    this.background = new Color("white");
    // this.fog = new Fog( 0x282828, 10, 50 );
    this.create();
    this.light();
    this.renderAnimations();
  }
  create() {
    // this.cube = new Cube(2, { x: 0, y: 1, z: 0 });
    // this.add(this.cube);
    this.ground = new Ground();
    this.add(this.ground);
  }
  light() {
    this.ambient = new AmbientLight(0x404040);
    this.add(this.ambient);
  }

  renderAnimations() {}
}
