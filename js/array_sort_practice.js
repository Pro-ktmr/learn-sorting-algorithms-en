import Card from './card.js';
import Config from './config.js';
import Grid from './grid.js';
import SortPractice from './sort_practice.js';
import Text from './text.js';

export default class ArraySortPractice extends SortPractice {
    static maxLength = 7;

    constructor(canvas) {
        super(canvas);

        this.posX = [];
        this.posY = [];
        for (var i = 0; i < ArraySortPractice.maxLength; i++) {
            this.posX.push(100 + 180 * i);
            this.posY.push(400);
        }
    }

    build(array) {
        this.canvas.clearAll();
        for (var i = 0; i < ArraySortPractice.maxLength; i++) {
            var grid = new Grid(i);
            grid.setCoordinate(this.posX[i], this.posY[i]);
            this.canvas.addGrid(grid);
        }
        for (var i = 0; i < array.length; i++) {
            var card = new Card(array[i], 'gray', 'green');
            card.setCoordinate(626 + 4 * i, 120);
            card.moveImmediatelyTo(this.posX[i], this.posY[i] + 10);
            card.setSmallPinImage('shadow');
            this.canvas.addCard(card);
        }
        var compareText = new Text();
        compareText.setText(`${Config.wordCompare}: 0 times`);
        compareText.setCoordinate(640, 640);
        this.canvas.addText(compareText);
        var swapText = new Text();
        swapText.setText(`${Config.wordSwap}: 0 times`);
        swapText.setCoordinate(640, 680);
        this.canvas.addText(swapText);

        var smallText = new Text();
        smallText.setText('Small');
        smallText.setCoordinate(50, 560);
        smallText.setFont('24px Noto Sans JP');
        this.canvas.addText(smallText);
        var bigText = new Text();
        bigText.setText('Large');
        bigText.setCoordinate(1220, 560);
        bigText.setFont('32px Noto Sans JP');
        this.canvas.addText(bigText);
    }
}