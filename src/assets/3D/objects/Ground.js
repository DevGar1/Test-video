import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  PlaneGeometry,
  TextureLoader,
} from "three";

export class Ground extends Mesh {
  constructor() {
    super(
      new PlaneGeometry(70, 70, 10),
      new MeshBasicMaterial({ color: "red" })
    );
    // const texture = new TextureLoader().load(
    //   `https://cdn.pixabay.com/photo/2022/05/16/19/14/road-7201023_960_720.jpg`
    // );
    this.rotation.x = -Math.PI / 4;
    this.material.side = DoubleSide;
    // mapDB.load(
    //   "https://cdn.pixabay.com/photo/2022/05/16/19/14/road-7201023_960_720.jpg",
    //   (textureMap) => {
    //     const uploadMaterial = new MeshStandardMaterial({
    //       color: 0x777777,
    //       // lightMap:texture,
    //       map: textureMap,
    //     });
    //     this.material = uploadMaterial;
    //   }
    // );
  }
  addVideo(texture) {
    const mapDB = new TextureLoader();
    mapDB.crossOrigin = "";
    mapDB.load(
      "https://www.w3schools.com/html/mov_bbb.mp4",
      (textureMap) => {
        this.material = MeshLambertMaterial({
          color: "white",
          map: textureMap,
          side: DoubleSide,
        });
      },
      () => console.log("loading"),
      (e) => {
        console.log("error");
        this.material = new MeshLambertMaterial({
          map: texture,
          color: "white",
        });
      }
    );
  }
}
