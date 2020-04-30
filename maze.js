var cols, rows;
var w = 40;
var grid = [];
function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            var cell = new Cell(x, y)
            grid.push(cell)
        }
    }
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(x, y) {
    this.x = x;
    this.y = y;
    // top, right, bottom, left
    this.walls = [true, true, true, true]
    this.show = function () {
        var x = this.x * w;
        var y = this.y * w;
        stroke(255);
        if (this.walls[0]) {
            //top
            line(x, y, x + w, y)
        }

        if (this.walls[1]) {
            //right
            line(x + w, y, x + w, y)
        }

        if (this.walls[2]) {
            //bottom
            line(x + w, y + w, x, y + w)
        }

        if (this.walls[3]) {
            //left
            line(x, y + w, x, y)
        }



        //noFill();
        //rect(x,y,w,w)
    }
}