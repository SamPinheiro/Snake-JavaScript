function Apple() {
    this.x = 0;
    this.y = 0;
    this.points = 10;

    this.pickLocation = function() {
        var cols = canvas.width / grid;
        var rows = canvas.height / grid;

        this.x  = Math.floor(Math.random(rows) * (rows - 0));
        this.y  = Math.floor(Math.random(cols) * (cols - 0));

        this.x = this.x * grid;
        this.y = this.y * grid;
    }    

    this.reset = function() {
        this.x = 0;
        this.y = 0;
    }

    this.render = function() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, grid, grid)
    }
}