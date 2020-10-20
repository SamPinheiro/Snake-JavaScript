function Apple() {
    this.x = 0;
    this.y = 0;
    this.points = 0;
    this.color = '';
    this.isPicked = false;
    this.apples = {
        red: {
            color: 'red',
            points: 10,
        },
        blue: {
            color: 'blue',
            points: 20
        },
        yellow: {
            color: 'yellow',
            points: 30,
        }
    }

    this.chooseApple = function() {
        if (!this.isPicked) {
            let random = Math.floor(Math.random() * (9));
            if (random >= 0 && random <= 4) { 
                this.color = this.apples.red.color;
                this.points = this.apples.red.points;
            } else if (random >= 5 && random < 7) {
                this.color = this.apples.blue.color;
                this.points = this.apples.blue.points;
            } else if (random >= 7 && random < 10) {
                this.color = this.apples.yellow.color;
                this.points = this.apples.yellow.points;
            }
            this.isPicked = true;
        } 
    }

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
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, grid, grid)
    }
}