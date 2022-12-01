let port;
let connectBtn;
let numInputs = 3;
let values = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();

  // any other ports can be opened via a dialog after
  // user interaction (see connectBtnClick below)

  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(10, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(220);

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let str = port.readUntil("\n");

  values = int(split(str, ",")); // Split string using ' ' as a delimiter/marker and parse to int

  for (let i = 0; i < values.length; i++) {
    if (i < numInputs) {
      //display
      text(values[i], 10 + i * 50, height - 20);
    }
    
    let diam = map(values[0], 0, 1023, 10, 60);
    ellipse(width / 2, height / 2, diam, diam);
    
    let diam02 = map(values[1], 0, 1023, 10, 60);
    ellipse(width / 2, height / 2, diam02, diam02);
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html("Connect to Arduino");
  } else {
    connectBtn.html("Disconnect");
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open("Arduino", 57600);
  } else {
    port.close();
  }
}
