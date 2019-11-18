import * as BABYLON from "babylonjs";
import { scene } from '../constants';

export class Mesh extends BABYLON.Mesh {
    constructor(name) {
        super(name, scene);
    }
}
