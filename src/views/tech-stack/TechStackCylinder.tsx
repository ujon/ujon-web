import React, { useRef, useLayoutEffect, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import MeshRotator from "modules/three/MeshRotator";

/**
 * Warnning
 * Image should be 64x64 size
 */

const CubeSetting = {
  size: 80,
  radius: 8,
  thickness: 10,
};
const helixSetting = {
  radius: 160,
  volume: 9,
  lineGap: 100,
};

const images: string[] = [
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/html5.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/css3.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/javascript.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/typescript.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/java.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/dart.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/react.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/redux.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/flutter.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/nodejs.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/express.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/graphql.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/spring.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/mongodb.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/grpc.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/mysql.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/oracle.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/nginx.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/docker.svg",
  "https://raw.githubusercontent.com/ujon/ujon/0f930aa49c87b10d986eb1c9bbcdd296131d3284/images/tech-stack/64x64/webpack.svg",
];

const TechStackCylinder = () => {
  const container = useRef<HTMLDivElement>(null);
  // THREE
  const svgLoader = new SVGLoader();
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    70,
    undefined,
    0.1,
    1000
  );
  const scene: THREE.Scene = new THREE.Scene();
  const renderer: THREE.Renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  const hanldeRotation = new MeshRotator();

  const dispose = () => {
    // delete renderer
    while (container.current?.hasChildNodes()) {
      container.current?.removeChild(
        container.current?.firstChild as ChildNode
      );
    }
  };

  useLayoutEffect(() => {
    resize();
    builder.light();
    const cube: THREE.Mesh = builder.cube();
    const helix = builder.helix({ obj: cube });
    hanldeRotation.set({ mesh: helix, axis: { y: 0.01 } });
    builder.orbitControls({ obj: helix });
    container.current?.appendChild(renderer.domElement);
    animate();

    return dispose;
  });

  useEffect(() => {
    window.addEventListener("resize", resize, false);
  });

  const builder = {
    light: (): void => {
      const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
      scene.add(light);

      const color = 0xffffff;
      const pointLight = new THREE.PointLight(color, 1, 1500);
      pointLight.position.set(500, 200, 0);
      scene.add(camera);
      camera.add(pointLight);
    },
    cube: (): THREE.Mesh => {
      const shape = new THREE.Shape();

      shape.moveTo(CubeSetting.radius, 0);
      shape.lineTo(CubeSetting.size - CubeSetting.radius, 0);
      shape.quadraticCurveTo(
        CubeSetting.size,
        0,
        CubeSetting.size,
        -CubeSetting.radius
      );
      shape.lineTo(CubeSetting.size, -(CubeSetting.size - CubeSetting.radius));
      shape.quadraticCurveTo(
        CubeSetting.size,
        -CubeSetting.size,
        CubeSetting.size - CubeSetting.radius,
        -CubeSetting.size
      );
      shape.lineTo(CubeSetting.radius, -CubeSetting.size);
      shape.quadraticCurveTo(
        0,
        -CubeSetting.size,
        0,
        -(CubeSetting.size - CubeSetting.radius)
      );
      shape.lineTo(0, -CubeSetting.radius);
      shape.quadraticCurveTo(0, 0, CubeSetting.radius, 0);

      const cube = new THREE.ExtrudeBufferGeometry(shape, {
        depth: CubeSetting.thickness,
        bevelEnabled: false,
      });
      const cubeMesh = new THREE.Mesh(
        cube.center(),
        new THREE.MeshPhongMaterial({
          wireframe: false,
          side: THREE.DoubleSide,
          shininess: 100,
          color: 0xaaa9ad,
        })
      );
      return cubeMesh;
    },
    iconCube: ({
      url,
      obj,
    }: {
      url: string;
      obj: THREE.Object3D;
    }): THREE.Object3D => {
      const result = obj.clone();
      const group = new THREE.Group();
      group.scale.y *= -1;
      svgLoader.load(
        url,
        function (data) {
          const paths = data.paths;

          const extrudeSetting = {
            depth: CubeSetting.thickness + 3,
            bevelEnabled: false,
          };
          paths.forEach((path) => {
            const material = new THREE.MeshPhongMaterial({
              color: path.color,
              side: THREE.DoubleSide,
              shininess: 150,
              depthWrite: true,
            });

            const shapes = SVGLoader.createShapes(path);
            shapes.forEach((shape, index) => {
              const geometry = new THREE.ExtrudeBufferGeometry(
                shape,
                extrudeSetting
              );

              const mesh = new THREE.Mesh(geometry, material);
              group.add(mesh);
            });
          });

          group.position.x -= 32;
          group.position.y += 32;
          group.position.z = -7;
          result.add(group);
        },
        function (xhr) {},
        function (error) {
          console.error(error);
        }
      );

      return result;
    },
    helix: ({ obj }: { obj: THREE.Mesh }): THREE.Group => {
      const helix = new THREE.Group();

      images.forEach((image: string, index) => {
        const theta =
          (Math.PI * 2 * index) / helixSetting.volume +
          Math.floor(index / helixSetting.volume) * 6;
        const y =
          -Math.floor(index / helixSetting.volume) * helixSetting.lineGap;

        const iconCube = builder.iconCube({ url: image, obj: obj });

        iconCube.position.setFromCylindricalCoords(
          helixSetting.radius,
          theta,
          y
        );

        const vector = new THREE.Vector3();
        vector.x = iconCube.position.x * 2;
        vector.y = iconCube.position.y;
        vector.z = iconCube.position.z * 2;
        iconCube.lookAt(vector);

        helix.add(iconCube);
      });

      scene.add(helix);
      return helix;
    },
    orbitControls: ({ obj }: { obj: THREE.Object3D }) => {
      const controls = new OrbitControls(camera, renderer.domElement);
      var bound = new THREE.Box3().setFromObject(obj);
      const center = bound.getCenter(new THREE.Vector3());
      camera.position.set(center.x, center.y + 280, 500);
      controls.target = center;
      controls.minDistance = 100;
      controls.maxDistance = 700;
      controls.minPolarAngle = Math.PI / 2 - 0.5;
      controls.maxPolarAngle = Math.PI / 2 + 0.5;
      controls.update();
    },
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  const resize = () => {
    const width = Number(container.current?.offsetWidth);
    const hegiht = Number(container.current?.offsetHeight);
    camera.aspect = width / hegiht;
    camera.updateProjectionMatrix();
    renderer.setSize(width, hegiht);
  };

  const render = () => {
    hanldeRotation.rotate();
    renderer.render(scene, camera);
  };

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default TechStackCylinder;
