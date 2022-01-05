import Card from './card.js';
import Config from './config.js';
import Grid from './grid.js';
import SortPracticeStrict from './sort_practice_strict.js';
import Text from './text.js';

export default class SelectionSortSlowAnimation extends SortPracticeStrict {
    static maxLength = 7;

    constructor(canvas) {
        super(canvas);

        this.posX = [];
        this.posY = [];
        for (var i = 0; i < SelectionSortSlowAnimation.maxLength; i++) {
            this.posX.push(100 + 180 * i);
            this.posY.push(400);
        }
    }

    build(array) {
        this.canvas.clearAll();
        for (var i = 0; i < SelectionSortSlowAnimation.maxLength; i++) {
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
        compareText.setText(`${Config.wordCompare}：0 回`);
        compareText.setCoordinate(640, 640);
        this.canvas.addText(compareText);
        var swapText = new Text();
        swapText.setText(`${Config.wordSwap}：0 回`);
        swapText.setCoordinate(640, 680);
        this.canvas.addText(swapText);

        var smallText = new Text();
        smallText.setText('小');
        smallText.setCoordinate(30, 560);
        smallText.setFont('24px Noto Sans JP');
        this.canvas.addText(smallText);
        var bigText = new Text();
        bigText.setText('大');
        bigText.setCoordinate(1250, 560);
        bigText.setFont('32px Noto Sans JP');
        this.canvas.addText(bigText);
    }

    
    calculateActions(array) {
        var N = array.length;
        var a = [];
        for (var i = 0; i < N; i++) {
            a.push([array[i], i]);
        }
        var actions = [];
        for (var i = 0; i < N - 1; i++) {
            for (var j = i + 1; j < N; j++) {
                actions.push(
                    ['compare', new Set([a[i][1], a[j][1]])]
                );
                if (a[i][0] > a[j][0]) {
                    actions.push(
                        ['swap', new Set([a[i][1], a[j][1]])]
                    );
                    [a[i], a[j]] = [a[j], a[i]];
                }
            }
            actions.push(
                ['fix', a[i][1]]
            );
        }
        actions.push(
            ['fix', a[N - 1][1]]
        );
        return actions;
    }
}