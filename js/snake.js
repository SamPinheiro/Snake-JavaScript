function Snake() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.vX = 0;
    this.vY = 0;
    this.tail = [];
    this.total = 1;
    this.canMove = false;

    this.dir = function (x, y) {
        if(this.canMove){
            this.vX = x;
            this.vY = y;
        }
    }

    this.reset = function() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.tail = [];
        this.total = 1;
        this.vX = 0;
        this.vY = 0;
        this.canMove = false;
    }

    this.isColliding = function () {
        for (let i = 1; i < this.tail.length; i++) {
            if (this.x == this.tail[i][0] &&
                this.y == this.tail[i][1]) {   
                    endGame();
            }
        }
    }

    this.wrap = function () {
        if (this.x < 0) this.x = canvas.width;
        else if (this.x > canvas.width) this.x = -grid;
        else if (this.y < 0) this.y = canvas.height;
        else if (this.y > canvas.height) this.y = -grid;
    };

    this.update = function () {
        this.isColliding();
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }
        this.tail[this.total - 1] = [this.x, this.y]

        this.wrap();
        

        this.x = this.x + this.vX * grid;
        this.y = this.y + this.vY * grid;
    }

    this.render = function () {
        ctx.fillStyle = "white";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i][0], this.tail[i][1], grid, grid);
        }
    }
}