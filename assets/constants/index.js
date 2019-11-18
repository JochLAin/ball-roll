import * as BABYLON from 'babylonjs';
import * as CANNON from 'cannon';

export const canvas = document.getElementById("renderCanvas");
export const context = canvas.getContext('webgl2', { antialias: true });
export const engine = new BABYLON.Engine(canvas, true);
export const scene = new BABYLON.Scene(engine);
scene.ambientColor = BABYLON.Color3.White();
scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
scene.collisionsEnabled = true;

export const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 25, BABYLON.Vector3.Zero(), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(engine.getRenderingCanvas(), true);

export const light = new BABYLON.HemisphericLight('light-hemispheric', new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

export const dirLight = new BABYLON.DirectionalLight('light-directional', new BABYLON.Vector3(0, -1, -1), scene);
dirLight.position = new BABYLON.Vector3(0, 20, 0);

export const shadows = new BABYLON.ShadowGenerator(1024, dirLight);
shadows.useBlurExponentialShadowMap = true;
shadows.setTransparencyShadow(true);

scene.enablePhysics(
    new BABYLON.Vector3(0, -9.8, 0),
    new BABYLON.CannonJSPlugin(true, 10, CANNON)
);
