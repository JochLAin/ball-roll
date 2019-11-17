import React, { Component } from 'react';
import BABYLON from 'babylonjs';
import { scene } from '../constants';

export default class Skybox extends Component {
    constructor(props) {
        super(props);

        const skybox = this.skybox = BABYLON.Mesh.CreateBox(this.props.name || "skybox", 250, scene);
        skybox.material = this.props.material;
    }

    render() {
        return null;
    }

    componentWillUnmount() {

    }
}
