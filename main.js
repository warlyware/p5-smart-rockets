var population;

function setup() {
    createCanvas(400, 300);
    population = new Population();
}

function draw() {
    background(0);
    population.run();
}

function Population() {
    this.rockets = [];
    this.populationSize = 50;

    for (var i = 0; i < this.populationSize; i++) {
        this.rockets[i] = new Rocket();
    }
    this.run = function() {
        for (var i = 0; i < this.populationSize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}

function Rocket() {
    this.position = createVector(width/2, height);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.show = function() {
        push();
        noStroke();
        fill(255, 100);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }
}
