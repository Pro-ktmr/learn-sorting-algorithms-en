import Canvas from './canvas.js';

export default class Practice {
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

    back() {
        // for override
    }

    canvasChanged(canvas) {
        // for override
    }
}
