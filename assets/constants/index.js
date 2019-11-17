import BABYLON from 'babylonjs'

const canvas = module.exports.canvas = document.getElementById("scene");
const engine = module.exports.engine = new BABYLON.Engine(canvas, true);
const scene = module.exports.scene = new BABYLON.Scene(engine);
scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
scene.collisionsEnabled = true;

const camera = module.exports.camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(0, 2.5, 5), scene);
camera.applyGravity = true;
camera.checkCollisions = true;
camera.speed = 0.5;
camera.angularSensibility = 1000;
camera.keysUp = [90];
camera.keysDown = [83];
camera.keysLeft = [81];
camera.keysRight = [68];
scene.activeCamera.attachControl(canvas);

const light = module.exports.light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0, 10, 0), scene);
light.diffuse = new BABYLON.Color3(1, 1, 1);
light.specular = new BABYLON.Color3(0.6, 0.6, 0.6);
light.intensity = 1.5;

engine.runRenderLoop(() => {
    scene.render();
});
