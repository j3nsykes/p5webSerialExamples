/*
Forked webserial APi port examples from
https://github.com/gohai/p5.webserial
*/
let port;
let connectBtn;
let brightness =0;

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

  
  brightness = round(map(mouseX,0,width,0,255))
  fill(255,brightness)
  ellipse(width/2,height/2,100,100)
    //remeber to round the values as you can only send int, string, byte to Arduino 
  
 
  //maybe you want to slow this down? see below.
  //every 20frames  
 if(frameCount%10==0){
   port.write(brightness+'\n'); //finish with a newline character for Arduino recieving
  
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
    port.open('Arduino', 57600);
  } else {
    port.close();
  }
  

}

