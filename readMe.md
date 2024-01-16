# Timer Library

The Timer library provides a simple timer class for handling interval-based callback execution in JavaScript.

## Usage

### Creating a Timer

To create a new timer, instantiate the Timer class with a callback function and the interval duration in milliseconds:

```javascript
// Define a callback function
function myCallback() {
  console.log("Timer callback executed!");
}

const myTimer = new Timer(myCallback, 1000);
```

### Starting the Timer

To start the timer, call the start method:

```javascript
myTimer.start();
```

### Stopping the Timer

To stop the timer, call the stop method:

```javascript
myTimer.stop();
```

### Checking Timer State

You can check if the timer is currently running using the isRunning property:

```javascript
if (myTimer.isRunning) {
  // Do something when the timer is running
} else {
  // Do something else when the timer is not running
}
```

### Elapsed Time

Get the elapsed time since the timer started using the elapsedTime property:

```javascript
const elapsed = myTimer.elapsedTime;
console.log(`Elapsed time: ${elapsed} ms`);
```

### Remaining Time

Get the remaining time until the next interval using the remainingTime property:

```javascript
const remaining = myTimer.remainingTime;
console.log(`Remaining time: ${remaining} ms`);
```

## Example

Here's a simple example of using the Timer library:

```javascript
// Declare a timer object
let t;

// Time interval for the timer in milliseconds
let time = 1000;

function setup() {
  // Create a canvas with width 600 and height 360
  createCanvas(600, 360);

  // Set the background color to black
  background(0);

  // Initialize and start the timer, passing in the callback function
  t = new Timer(callback, time);
  t.start();
}

function draw() {
  // run your programm
}

// Define a callback function
function myCallback() {
  console.log("Timer callback executed!");
}
```

This example will log the message 'Timer callback executed!' every second.
