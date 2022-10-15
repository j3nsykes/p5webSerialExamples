void setup()
{
  // Connect to serial
  Serial.begin(9600);
 
}

void loop() {
  int val = analogRead(A0);
  Serial.println(val);
  // 10 readings per second
  delay(100);
}
