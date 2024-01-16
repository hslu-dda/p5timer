// Declare a timer object
let t;

// Variable for rectangle fill color
let fillColor;

// Time interval for the timer in milliseconds
let time = 1000;

// Initial coordinates for drawing rectangles
let x = 0;
let y = 0;

// Width of the rectangles
let rectW = 60;

// Array to store positions of drawn rectangles
let positions = [];

function setup() {
  // Set color mode to HSB for a different color representation
  colorMode(HSB, 360, 100, 100);

  // Create a canvas with width 600 and height 360
  createCanvas(600, 360);

  // Set the initial fill color to a shade of red
  fillColor = color(200, 50, 100);

  // Set the background color to black
  background(0);

  // Initialize and start the timer, passing in the callback function
  t = new Timer(callback, time);
  t.start();
}

function draw() {
  // Set background color to gray
  background(100);

  // Draw rectangles at positions stored in the array
  fill(fillColor);
  stroke(0);
  positions.forEach((element) => {
    rect(element[0], element[1], rectW);
  });
}

// Callback function for the timer tick
function callback() {
  // Log a message to the console on each tick
  console.log("tick");

  // Add the current position to the array
  positions.push([x, y]);

  // Move to the next column
  x += rectW;

  // If the column exceeds canvas width, move to the next row
  if (x > width - rectW) {
    x = 0;
    y += rectW;
  }

  // If the row exceeds canvas height, reset positions array and start over
  if (y >= height) {
    x = 0;
    y = 0;
    positions = [];
  }
}
