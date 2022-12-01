String inString = "";

void setup() {
  Serial.begin(115200);
}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) { //if serial is available
    inString = Serial.readStringUntil('\n'); //read until a newline
    if (inString.length() > 0) {

      // this would be the place to use the incoming value to drive an output
      int val = inString.toInt(); //convert the String to an int
      analogWrite(9, val);
      delay(15);
    }
  }
}
