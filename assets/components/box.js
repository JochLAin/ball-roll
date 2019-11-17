import React, { Component } from 'react';
import BABYLON from 'babylonjs';
import { scene } from '../constants';

export default class Scene extends Component {
    constructor(props) {
        super(props);

        const box = this.box = BABYLON.Mesh.CreateBox(this.props.name, this.props.size, scene);
        box.position = new BABYLON.Vector3(this.props.position.x, this.props.size / 2, this.props.position.z);
        box.material = this.props.material;
        box.checkCollisions = true;
    }

    render() {
        return null;
    }

    componentWillUnmount() {

    }
}
