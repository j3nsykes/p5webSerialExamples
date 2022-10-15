let port;
let connectBtn;

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();



  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);


}

function draw() {
  background(220);

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let val = port.readUntil("\n");
  if (val.length > 0) {
    //display the incoming data
    text(val, 10, height-20);
    
    //do something with the data!
    noStroke();
    fill(255,200,0);
    ellipse(width/2,height/2,val,val);
    
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}

