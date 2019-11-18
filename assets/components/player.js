import * as BABYLON from 'babylonjs';
import * as Direction from '../constants/direction';
import { scene, shadows } from '../constants';
import { Mesh } from './index';

export default class Player extends Mesh {
    constructor(diameter) {
        super('player');

        const vertexData = BABYLON.VertexData.CreateSphere({ diameter });
        vertexData.applyToMesh(this);

        const material = new BABYLON.StandardMaterial('player material', scene);

        material.diffuseColor = new BABYLON.Color3(0.3, 0, 0.8);
        material.emissiveColor = new BABYLON.Color3(0.3, 0, 0.8);
        material.alpha = 0.6;
        material.specularPower = 16;
        material.specularColor = new BABYLON.Color3(0.7, 0.7, 1);

        // Fresnel
        material.reflectionFresnelParameters = new BABYLON.FresnelParameters();

        material.emissiveFresnelParameters = new BABYLON.FresnelParameters();
        material.emissiveFresnelParameters.bias = 0.6;
        material.emissiveFresnelParameters.power = 4;
        material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
        material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();

        material.opacityFresnelParameters = new BABYLON.FresnelParameters();
        material.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
        material.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();

        this.material = material;
        shadows.getShadowMap().renderList.push(this);

        // physics
        this.physicsImpostor = new BABYLON.PhysicsImpostor(
            this,
            BABYLON.PhysicsImpostor.SphereImpostor,
            {
                mass: 5,
                friction: 0.9,
                restitution: 0.9
            },
            scene
        );

        this.direction = BABYLON.Vector3.Zero();
        this.getScene().registerBeforeRender(() => {
            const { down, left, right, up } = Direction.get();
            const direction = BABYLON.Vector3.Zero();

            if (up) direction.z -= 1;
            if (down) direction.z += 1;
            if (left) direction.x += 1;
            if (right) direction.x -= 1;

            this.applyImpulse(direction, this.position);
        });
    }
}
