var cols, rows;
var w = 40;
var grid = [];
function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent("canvas");
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


this.readText = function (evt) {
    event.preventDefault();
    var input = document.querySelector("#fileUp")
    const reader = new FileReader();
    reader.readAsText(input.files[0])
    reader.onload = function () {
        const lines = reader.result.split('\n')
        console.log(lines)
        drawMap(lines)
    }
}

drawMap = function (map) {
    for (var i = 0; i < map.length; i++) {
        if (i % 2 == 0) {
            console.log(map[i])
        }
    }
}


