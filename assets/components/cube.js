import * as BABYLON from 'babylonjs';
import { scene, shadows } from '../constants';
import { Mesh } from './index';

export default class Cube extends Mesh {
    constructor(size) {
        super('cube');
        const vertexData = BABYLON.VertexData.CreateBox({ size });
        vertexData.applyToMesh(this);

        const material = new BABYLON.StandardMaterial('cube-material', scene);
        material.emissiveColor = new BABYLON.Color3(0.7, 0, 0.5);
        material.specularColor = new BABYLON.Color3(0, 1, 0);

        this.material = material;
        shadows.getShadowMap().renderList.push(this);

        // animation
        // const animation = new BABYLON.Animation('cube-animation', 'rotation.y', 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        // const keys = [
        //     { frame: 0, value: 0 },
        //     { frame: 30, value: Math.PI / 2 },
        //     { frame: 60, value: Math.PI },
        //     { frame: 90, value: 3 * Math.PI / 2 },
        //     { frame: 120, value: 2 * Math.PI }
        // ];
        // animation.setKeys(keys);
        // this.animations.push(animation);
        // scene.beginAnimation(this, 0, 120, true, 1.0);
    }
}
