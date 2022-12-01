int numPins = 3;
const int sensorPins [3] = {0,1,2};



void setup() {
  // put your setup code here, to run once:
Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:

for(int i=0;i<numPins;i++){
  int sensorValue = analogRead(sensorPins[i]);
    Serial.print(sensorValue);
    Serial.print(","); //split by ',' comma 

  }
     Serial.println(""); //newline marker  
     delay(15);
}

