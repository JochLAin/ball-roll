import React, { Component } from 'react';
import BABYLON from 'babylonjs';
import { scene } from '../constants';

export default class Scene extends Component {
    constructor(props) {
        super(props);

        const ground = this.ground = BABYLON.Mesh.CreatePlane("ground", 50, scene);
        ground.rotation.x = Math.PI / 2;
        ground.material = new BABYLON.StandardMaterial("gMaterial", scene);
        ground.material.diffuseTexture = new BABYLON.Texture("images/ground.png", scene);
        ground.checkCollisions = true;
    }

    render() {
        return null;
    }

    componentWillUnmount() {

    }
}
