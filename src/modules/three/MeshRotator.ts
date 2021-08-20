import * as THREE from "three";

interface Axis {
  x?: number;
  y?: number;
  z?: number;
}
interface MeshRotatorItem {
  mesh: THREE.Object3D;
  axis: Axis;
}

class MeshRotator {
  readonly items: MeshRotatorItem[] = [];

  rotate() {
    this.items.forEach((v) => {
      if (v.axis.x && v.axis.x !== 0) v.mesh.rotateX(v.axis.x);
      if (v.axis.y && v.axis.y !== 0) v.mesh.rotateY(v.axis.y);
      if (v.axis.z && v.axis.z !== 0) v.mesh.rotateZ(v.axis.z);
    });
  }

  set(item: MeshRotatorItem) {
    const target = this.checkMeshExists(item);
    if (target === null) {
      this.items.push(item);
    } else {
      target.axis = item.axis;
    }
  }

  private checkMeshExists(item: MeshRotatorItem): MeshRotatorItem | null {
    return this.items.filter((v) => v.mesh === item.mesh)[0] ?? null;
  }
}

export default MeshRotator;
