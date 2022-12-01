let port;
let connectBtn;

function setup() {
  createCanvas(400, 400);
  background(220);
//create a Serial connection
  port = createSerial();


//create a Button element to press for connecting Arduino
  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20); //position of button
  connectBtn.mousePressed(connectBtnClick); //if button is clicked run connectBtnClick function below


}

function draw() {
  

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let val = port.readUntil("\n");
  if (val.length > 0) {
    background(220);
    //display the incoming data
    fill(0);
    text(val, 10, height-20);
    
    //do something with the data!
    noStroke();
    fill(255,200,0);
    //x,y,w,h
    ellipse(200,200,val,val);
    
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }
}

//this function runs when 'connect' button is clicked
function connectBtnClick() {
  if (!port.opened()) {//if port is not already open/connected
    port.open('Arduino', 9600); //open a connection at baud rate 9600
  } else { //otherwise close port connection 
    port.close();
  }
}

