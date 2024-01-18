import { createPCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { Resizer } from "./systems/Resizer";
import { createRenderer } from "./systems/renderer";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { createPlane } from "./components/plane";

let camera;
let scene;
let renderer;

class World {
    constructor(container) {
        camera = createPCamera()
        scene = createScene()
        renderer = createRenderer()
        this.plane = createPlane()

        const controls = new OrbitControls(camera, container)
        controls.update()

        const resizer = new Resizer(camera, renderer, container)
        container.append(renderer.domElement)
        scene.add(this.plane)
    }

    render() {
        renderer.render(scene, camera);
    }
}

export { World }