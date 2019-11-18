import * as BABYLON from 'babylonjs';

export const canvas = document.getElementById("renderCanvas");
export const context = canvas.getContext('webgl2', { antialias: true });
export const engine = new BABYLON.Engine(context, true);
export const scene = new BABYLON.Scene(engine);
scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
scene.collisionsEnabled = true;

export const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5,-10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
scene.activeCamera.attachControl(canvas, false);

export const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
// export const light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0, 10, 0), scene);
// light.diffuse = new BABYLON.Color3(1, 1, 1);
// light.specular = new BABYLON.Color3(0.6, 0.6, 0.6);
// light.intensity = 1.5;
