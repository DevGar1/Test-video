import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";

export class Cube extends Mesh {
  constructor(size, { x, y, z }) {
    super();
    this.geometry = new BoxBufferGeometry(size, size, size);
    const uploadMaterial = new MeshStandardMaterial({
      color: 0x551111,
    });
    this.material = uploadMaterial;
    this.name = `cube-${size}`;
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    this.renderOrder = 0;
  }
}
