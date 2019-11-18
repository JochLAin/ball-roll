import Game from '../components/game';
import fps from '../components/fps';
import { engine, scene } from "../constants";

const game = Game.create();

scene.registerBeforeRender(() => {
    let index;
    game.cubes.forEach(((cube, i) => {
        if (cube.intersectsMesh(game.player)) {
            cube.dispose();
            index = i;
        }
    }));
    if (index !== undefined) game.cubes.splice(index, 1);
    // document.getElementById('info').innerText = `Cubes left: ${game.cubes.length}`;
});

let count = 0;
engine.resize();
engine.runRenderLoop(() => {
    scene.render();
    count++;
});
window.addEventListener('resize', () => {
    engine.resize();
});

setInterval(() => {
    fps.innerHTML = `${count} fps`;
    count = 0;
}, 1000);
