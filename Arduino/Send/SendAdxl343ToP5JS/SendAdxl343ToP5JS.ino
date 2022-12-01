#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL343.h>


/* Assign a unique ID to this sensor at the same time */
/* Uncomment following line for default Wire bus      */
Adafruit_ADXL343 accel = Adafruit_ADXL343(12345);

void setup()
{
  Serial.begin(115200);
  while (!Serial);
  /* Initialise the sensor */
  if(!accel.begin())
  {
    /* There was a problem detecting the ADXL343 ... check your connections */
    Serial.println("Ooops, no ADXL343 detected ... Check your wiring!");
    while(1);
  }

  /* Set the range to whatever is appropriate for your project */
  accel.setRange(ADXL343_RANGE_16_G);

  /* Display some basic information on this sensor */
  accel.printSensorDetails();
  
}

void loop()
{
  /* Get a new sensor event */
  sensors_event_t event;
  accel.getEvent(&event);

  /* Display the results (acceleration is measured in m/s^2) */
Serial.print(event.acceleration.x); Serial.print(",");
Serial.print(event.acceleration.y); Serial.print(",");
Serial.print(event.acceleration.z); Serial.print(",");
Serial.println("");//newline marker
delay(500);
}
