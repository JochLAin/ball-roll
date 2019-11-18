import * as BABYLON from 'babylonjs';
import { scene } from '../constants';
import { Mesh } from './index';

export default class Ground extends Mesh {
    constructor(size) {
        super('ground');
        const vertexData = BABYLON.VertexData.CreateBox({
            width: size,
            height: size,
            depth: 0.05
        });
        vertexData.applyToMesh(this);
        this.rotation.x = Math.PI / 2;
        this.physicsImpostor = this.makeStaticImposter(this);
        // make walls
        const material = new BABYLON.StandardMaterial('ground-material', scene);
        material.diffuseColor = new BABYLON.Color3(0.25, 0.5, 1);
        material.specularColor = BABYLON.Color3.White();
        material.ambientColor = new BABYLON.Color3(0.1, 0, 0);

        this.material = material;
        this.makeWalls(size, material);
        this.receiveShadows = true;
    }

    makeWalls(size, material) {
        // create walls
        this.northWall = new BABYLON.MeshBuilder.CreateBox(
            'wall',
            {
                width: size,
                height: 1,
                depth: 1.5
            },
            scene
        );
        this.northWall.position.y = -size / 2;
        this.northWall.physicsImpostor = this.makeStaticImposter(this.northWall, scene);
        this.northWall.material = material;

        this.southWall = new BABYLON.MeshBuilder.CreateBox(
            'wall',
            {
                width: size,
                height: 1,
                depth: 1.5
            },
            scene
        );
        this.southWall.position.y = size / 2;
        this.southWall.physicsImpostor = this.makeStaticImposter(this.southWall, scene);
        this.southWall.material = material;

        this.eastWall = new BABYLON.MeshBuilder.CreateBox(
            'wall',
            {
                width: size - 1,
                height: 1,
                depth: 1.5
            },
            scene
        );
        this.eastWall.rotation.z = Math.PI / 2;
        this.eastWall.position.x = 0.5 - size / 2;
        this.eastWall.physicsImpostor = this.makeStaticImposter(this.eastWall, scene);
        this.eastWall.material = material;

        this.westWall = new BABYLON.MeshBuilder.CreateBox(
            'wall',
            {
                width: size - 1,
                height: 1,
                depth: 1.5
            },
            scene
        );
        this.westWall.rotation.z = Math.PI / 2;
        this.westWall.position.x = size / 2 - 0.5;
        this.westWall.physicsImpostor = this.makeStaticImposter(this.westWall, scene);
        this.westWall.material = material;

        // attaches wall meshes to the root game object.
        this.northWall.parent = this;
        this.southWall.parent = this;
        this.westWall.parent = this;
        this.eastWall.parent = this;
    }

    makeStaticImposter(object) {
        return new BABYLON.PhysicsImpostor(
            object,
            BABYLON.PhysicsImpostor.BoxImpostor,
            {
                mass: 0,
                restitution: 0.9
            },
            scene
        );
    }
}
