/*
Forked webserial APi port examples from
https://github.com/gohai/p5.webserial
*/
let port;
let connectBtn;
let positionX =0;
let positionY =0;

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();
  
  // any other ports can be opened via a dialog after
  // user interaction (see connectBtnClick below)

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);


}

function draw() {
  background(220);

  
  positionX = round(map(mouseX,0,width,0,180))
  positionY = round(map(mouseY,0,height,0,180))
  fill(255)
  ellipse(mouseX,mouseY,100,100)
    //remeber to round the values as you can only send int, string, byte to Arduino 
  

 
  
  //maybe you want to slow this down? see below.
  
 if(frameCount%15==0){ //every 0.5 seconds
   //make a long string with both variables 
   //end the message with '\n' to signify a new line of data
  port.write(positionX+positionY+'\n'); 
  
}


    // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }
}
// function mousePressed(){
//     //convert to string
//   brightness =String(brightness)
//    port.write(brightness+'\n'); 

// }
function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
  

}

