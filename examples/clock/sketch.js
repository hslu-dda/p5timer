// Declare a timer object
let t;

// Angle variable for rotating elements
let theta = 0;

// Time interval for the timer in milliseconds
let time = 1000;

function setup() {
  // Set color mode to HSB for a different color representation
  colorMode(HSB, 360, 100, 100);

  // Create a canvas with width 600 and height 360
  createCanvas(600, 360);

  // Set the background color to black
  background(0);

  // Initialize and start the timer, passing in the callback function
  t = new Timer(callback, time);
  t.start();
}

function draw() {
  // Set background color to gray
  background(100);

  // Draw clock elements
  noStroke();
  fill(0, 0, 0);
  circle(width / 2, height / 2, 5);

  // Draw clock ticks
  push();
  translate(width / 2, height / 2);
  stroke(0, 0, 0);

  let angle = 0;
  for (let i = 0; i < 60; i++) {
    angle += (2 * PI) / 60;
    push();
    rotate(angle);
    line(0, -105, 0, -115);
    pop();
  }
  for (let i = 0; i < 12; i++) {
    angle += (2 * PI) / 12;
    push();
    strokeWeight(2);
    rotate(angle);
    line(0, -100, 0, -115);
    pop();
  }

  // Draw rotating clock hand
  rotate(theta);
  stroke(0, 100, 100);
  strokeWeight(2);
  line(0, 10, 0, -90);
  noStroke();
  fill(0, 100, 100);
  circle(0, -90, 15);
  pop();
}

// Callback function for the timer tick
function callback() {
  // Log a message to the console on each tick
  console.log("tick");

  // Increment the rotation angle for the clock hand
  theta += (2 * PI) / 60;
}
