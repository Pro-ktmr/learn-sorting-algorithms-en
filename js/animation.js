import Canvas from './canvas.js';

export default class Animation {
    constructor(canvas) {
        this.canvas = new Canvas(canvas);
        this.canvas.addChangeListener(this.canvasChanged);
    }

    set(array) {
        // for override
    }

    begin() {
        // for override
    }

    advance() {
        // for override
    }

    back() {
        // for override
    }

    mouseMove(x, y) {
        this.canvas.setMouseCoordinate(x, y);
    }

    canvasChanged(canvas) {
        // for override
    }
}
