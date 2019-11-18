import * as BABYLON from 'babylonjs';
import { engine, scene } from '../constants';
import '../stylesheets';

const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, scene);
sphere.position.y = 1;

const ground = BABYLON.Mesh.CreateGround("ground",  { height: 6, width: 6, subdivisions: 2 }, scene);
ground.rotation.x = Math.PI / 2;
ground.checkCollisions = true;

engine.resize();
engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});
