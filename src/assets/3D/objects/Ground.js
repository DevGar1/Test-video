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
      new MeshBasicMaterial({ color: 0x282828 })
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
    mapDB.load(
      "https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4",
      (textureMap) => {
        this.material = MeshLambertMaterial({
          color: "white",
          map: textureMap,
          side: DoubleSide,
        });
      }
    );
  }
}
