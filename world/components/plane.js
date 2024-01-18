import { IcosahedronGeometry, Mesh, MeshNormalMaterial, PlaneGeometry, ShaderMaterial, SphereGeometry } from "three";
import vertex from '../assets/shaders/vertex.glsl'
import fragment from '../assets/shaders/fragment.glsl'

let segments = 256;
function createPlane() {
    const geom = new PlaneGeometry(500, 500, segments, segments);
    const mat = new ShaderMaterial({ 
        vertexShader: vertex,
        fragmentShader: fragment,
        wireframe: true
    });
    const plane = new Mesh(geom, mat)
    console.log(plane)
    return plane
}

export {createPlane}