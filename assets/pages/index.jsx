import React, { Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import BABYLON from "babylonjs";
import { scene } from '../constants';
import Box from '../components/box';
import Scene from '../components/scene';
import Skybox from '../components/skybox';

const material = new BABYLON.StandardMaterial("box-material", scene);
material.diffuseTexture = new BABYLON.Texture("images/box.png", scene);

ReactDOM.render(
    <Fragment>
        <Scene  />
        <Box name={`box-1`} position={{ x: -15, z: 15 }} size={2.5} />
        <Box name={`box-2`} position={{ x: -15, z: -15 }} size={2.5} />
        <Box name={`box-3`} position={{ x: 15, z: 15 }} size={2.5} />
        <Box name={`box-4`} position={{ x: 15, z: -15 }} size={2.5} />
    </Fragment>,
    document.getElementById('root')
);