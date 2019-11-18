const directions = {
    down: false,
    left: false,
    right: false,
    up: false
};

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
        case 'KeyZ':
            Object.assign(directions, { up: true });
            break;
        case 'ArrowDown':
        case 'KeyS':
            Object.assign(directions, { down: true });
            break;
        case 'ArrowLeft':
        case 'KeyA':
        case 'KeyQ':
            Object.assign(directions, { left: true });
            break;
        case 'ArrowRight':
        case 'KeyD':
            Object.assign(directions, { right: true });
            break;
    }
});
window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
        case 'KeyZ':
            Object.assign(directions, { up: false });
            break;
        case 'ArrowDown':
        case 'KeyS':
            Object.assign(directions, { down: false });
            break;
        case 'ArrowLeft':
        case 'KeyA':
        case 'KeyQ':
            Object.assign(directions, { left: false });
            break;
        case 'ArrowRight':
        case 'KeyD':
            Object.assign(directions, { right: false });
            break;
    }
});

export const get = () => directions;
