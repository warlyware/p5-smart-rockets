function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
}

function Rocket() {
    this.position = createVector();
    this.velocity = createVector();
    this.acceleration = createVector();

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
}
