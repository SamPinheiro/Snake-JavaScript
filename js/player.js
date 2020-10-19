function Player() {
    this.score = 0;

    this.updateScore = function(points) {
        this.score += points;
    } 

    this.resetScore = function() {
        this.score = 0;
    }

    this.renderScore = function() {
        ctx.font = '40px Verdana';
        ctx.fillStyle = "white";
        ctx.fillText("Pontos: " + this.score, 20, 50);
    }
}