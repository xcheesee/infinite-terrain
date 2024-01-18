import { World } from "./world/World"
import '/style.css'

function main() {
  const container = document.getElementById('app')
  const world = new World(container)
  function animate() {
    world.render()
    requestAnimationFrame(animate);
  }
  animate()
}
main()
