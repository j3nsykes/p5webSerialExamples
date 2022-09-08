#include <Servo.h>

Servo myservo;  // create servo object to control a servo

String inString = "";

void setup() {
  Serial.begin(57600);
  // send an intro:
  Serial.println("\n\nString toInt():");
  Serial.println();
  myservo.attach(6);
}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) {
    inString = Serial.readStringUntil('\n');
    if (inString.length() > 0) {

      // this would be the place to parse,
      // and act upon the message from the
      // computer
      int val = inString.toInt();
      analogWrite(9, val);
      myservo.write(val);                  // sets the servo position according to the scaled value
      delay(15);
    }
  }
}
