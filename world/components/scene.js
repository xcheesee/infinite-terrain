import { Scene, Color } from "three";

function createScene() {
    const scene = new Scene()
    scene.background = new Color('white')
    return scene
}

export { createScene }