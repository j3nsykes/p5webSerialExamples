// code to extract String of data from P5JS
const char marker = '\n'; //This is the end of message marker
char serialbuf[32]; //This gives the incoming serial some room. Change it if you want a longer incoming.


void setup() {
  Serial.begin(57600);
}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) {
    static int bufpos = 0; //starts the buffer back at the first position in the incoming serial.read
    char inchar = Serial.read(); //assigns one byte (as serial.read()'s only input one byte at a time
    if (inchar != marker) { //if the incoming character is not the byte that is the incoming end marker
      serialbuf[bufpos] = inchar; //the buffer position in the array get assigned to the current read
      bufpos++; //once that has happend the buffer advances, doing this over and over again until the end of package marker is read.
    }

    else { //once the end of package marker has been read
      serialbuf[bufpos] = 0; //restart the buff
      bufpos = 0; //restart the position of the buff
      int val01 = atoi(subStr(serialbuf, ",", 1)); // recieve the 1st value and convert it to integer
      int val02 = atoi(subStr(serialbuf, ",", 2));
     
    //this is your output message!!!!
      analogWrite(9,val01); //send to led
      analogWrite(11,val02); //send to led
    }
  }
}


// function needed to extract the string of data from processing/P5JS.
char* subStr (char* input_string, char *separator, int segment_number) {
  char *act, *sub, *ptr;
  static char copy[20];
  int i;
  strcpy(copy, input_string);
  for (i = 1, act = copy; i <= segment_number; i++, act = NULL) {
    sub = strtok_r(act, separator, &ptr);
    if (sub == NULL) break;
  }
  return sub;
}