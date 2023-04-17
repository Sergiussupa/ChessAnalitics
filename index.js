let config = {
    a: 10,
}
class Render {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.cell = (this.setSize() - 16 * config.a) / 8;
        this.cellMargin = this.cell + 2 * config.a;
    }
    setSize() {
        return (this.w > this.h ? this.h : this.w);
    }
    renderRect(a1, a2, size, color) {
        this.ctx.beginPath()
        this.ctx.rect(a1, a2, size, size);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    renderBoard() {
        this.renderRect(0, 0, this.setSize(), 'brown');
    }
    renderGrid() {
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                this.renderRect(config.a + this.cellMargin * i, config.a + this.cellMargin * j, this.cell, 'red');
            }
        }
    }
    addText(text, z, x) {
        //for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = "48px serif";
            //ctx.fillText(this.arrStates[z][x], config.a + this.cellMargin * (x + .3), (config.a + this.cellMargin * (z + 1) / 2);
            this.ctx.fillText(text, config.a + this.cellMargin * (x + .3), config.a + this.cellMargin * (z + .55));
        }
        //}

    }
    addTextGrid() {
        for (let i = 0; i < state.arr.length; i++) {
            for (let j = 0; j < state.arr[i].length; j++) {
                if (state.arr[i][j] == 'empty') continue;
                this.addText(state.arr[i][j], i, j);
            }
        }

    }
    render() {
        this.renderBoard();
        this.renderGrid();
        this.addTextGrid();
    }
}

class State {
    constructor(str) {
        this.str = str;
        this.arr = [];
        this.strArr = [];
    }
    createArr() {
        this.arr = new Array(8);

        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = [];
        }

    }
    decoder() {
        this.createArr();
        let count = 0;
        let j = 0;
        for (let i = 0; i < this.str.length; i++) {
            if (this.str[i] == '/') {
                j++;
                continue;
            }

            if (!isNaN(+this.str[i])) {
                count = this.str[i];
            }
            if (count === 0) {
                this.arr[j].push(this.str[i]);
            } else {
                for (let z = 0; z < count; z++) {
                    this.arr[j].push('empty');
                }
                //this.arr[j].push('empty');
                count = 0;
            }
        }

        console.log(this.strArr);
        console.table(this.arr);
    }
}
let state = new State('rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N3P1/PPP2PBP/R1BQK2R');
state.decoder();
let render = new Render();
render.render();


/* 
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

function start() {
    config.width = window.innerWidth;
    config.height = window.innerHeight;
    canvas.width = config.refSide();
    canvas.height = config.refSide();
    //config.proportion = config
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.reCalc();
    board.createBoard();
    console.table(config.refSide());
}

start();
window.addEventListener('resize', start);*/