let stars = [];
const colors = [
    [255, 205, 228],
    [248, 102, 36],
    [234, 53, 70],
    [163, 79, 241],
    [129, 228, 241],
];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(13, 27, 42);
    for (let i = 0; i < 200; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(10, 20, 50, 25); // Dark blue with some alpha for fading effect
    for (let star of stars) {
        star.update();
        star.show();
    }
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(2, 5);
        this.color = random(colors);
        this.twinkleFrame = int(random(30, 120));
        this.currentFrame = 0;
    }

    update() {
        this.currentFrame++;
        if (this.currentFrame % this.twinkleFrame === 0) {
            this.size = random(2, 5);
            this.twinkleFrame = int(random(30, 120));
        }
    }

    show() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.y, this.size, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
