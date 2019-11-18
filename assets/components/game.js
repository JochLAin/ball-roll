import * as BABYLON from 'babylonjs';
import Ground from './ground';
import Cube from './cube';
import Player from './player';

const NUM_OF_CUBES = 10;
const GROUND_SIZE = 20;

export default class Game {
    static create = () => {
        return new Game();
    };

    constructor() {
        this.ground = new Ground(GROUND_SIZE);
        this.placeCubes();
        this.player = new Player(1);
        this.player.position = new BABYLON.Vector3(0, 1, 0);
    }

    placeCubes() {
        this.cubes = [];
        for (let i = 0; i < NUM_OF_CUBES; i++) {
            const cube = new Cube(0.35, this);
            cube.position.y = 0.5;
            cube.rotation.x = Math.PI / 4;
            cube.rotation.z = Math.PI / 4;
            // RANDOM NUMBER BETWEEN MIN MAX
            const max = GROUND_SIZE / 2 - 1.5;
            const min = -GROUND_SIZE / 2 + 1.5;
            cube.position.x = Math.random() * (max - min) + min;
            cube.position.z = Math.random() * (max - min) + min;
            this.cubes.push(cube);
        }
    }
}
