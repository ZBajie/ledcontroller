# RGB Led controller app

An app to control an rgb-led strip conected to an arduino.

The app sends a string with a comand and a value with bluetooth to the arduino.

The string that is sent should look like this:

- Brightness : <brightness#80> , Value between 0-255.
- Color: <setLedColorAll#128,128,128> , RGB values.

# Installation

ionic start ledcontroller blank --type=angular
Was used as start to build the app.

## Running

Git clone

npm install

### For web

ionic serve

Bluetooth doesn`t work on web.
And the style is only for mobile.

### For android

ionic build
ionic cap add android

Start Android studio.

Import android mapp.
Connect mobile and press play.

# Arduino code

```
#include <SoftwareSerial.h>
#include <FastLED.h>


// Bluetooth
// Define RX and TX pins for SoftwareSerial
SoftwareSerial BTSerial(10, 11); // RX | TX

String incomingData = "";
String command = "";
String values = "";

// FastLed

int brigthnessStrength = 60;

#define DATA_PIN 12
#define NUM_LEDS 15
#define BRIGHTNESS  brigthnessStrength//between 0 to 255
#define LED_TYPE WS2811
#define COLOR_ORDER GRB
CRGB leds[NUM_LEDS]; //will create an array named LEDs that can hold the RGB data for the number of LEDs you want.




void setup() {
  // Start the hardware serial communication for debugging
  Serial.begin(9600);
  Serial.println("Arduino is ready to communicate over Bluetooth!");

  // Start the Bluetooth serial communication
  BTSerial.begin(9600); // Default baud rate for HC-05 or JDY-30
  Serial.println("JDY-30 Bluetooth module initialized.");

  // Fastled
  FastLED.addLeds<LED_TYPE, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS);
  FastLED.setBrightness(BRIGHTNESS);

  Serial.print("Number of LEDs: ");
  Serial.println(NUM_LEDS);

  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB::Green;  // Set each LED to green
  }
  FastLED.show();


}

void loop() {
  // Check if data is available from Bluetooth
  while (BTSerial.available()) {
    char receivedChar = BTSerial.read();

    if (receivedChar == '<') {
      incomingData = ""; // Start a new message
    } else if (receivedChar == '>') {
      printMessage(incomingData); // Process the complete message
      processIncomingData(incomingData);
    } else {
      incomingData += receivedChar; // Append received characters to the message
    }
  }

  // Check if data is available from Serial Monitor
  if (Serial.available()) {
    char toSend = Serial.read();
    Serial.print("Sending to Bluetooth: ");
    Serial.println(toSend);
    BTSerial.write(toSend);
  }

}

// Process incomingData

void processIncomingData(String incomingData) {
  int splitIndex = incomingData.indexOf('#');

  if (splitIndex != -1) {
    command = incomingData.substring(0, splitIndex);
    values = incomingData.substring(splitIndex +1);
  } else {
    command = incomingData;
    values = "";
  }
  executeCommands(command, values);
}



// Function to print the received message
void printMessage(String receivedData) {
  Serial.print("Received over Bluetooth: ");
  Serial.println(receivedData);
  BTSerial.write("Received Data");
}

// Function to execute commands
void executeCommands(String command, String values) {

  if (command == "setBrightness") {
    int brightness;
    if (sscanf(values.c_str(), "%d", &brightness) == 1) {
      if(brightness >= 0 && brightness < 266) {
        BRIGHTNESS = brightness;
        FastLED.setBrightness(BRIGHTNESS);
        FastLED.show();
      } else {
        BTSerial.write("Test");
      }
    }

  } else if (command == "setLedColorAll") {
    int r, g, b;
    if (sscanf(values.c_str(), "%d,%d,%d", &r, &g, &b) == 3) {
      for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB(r, g, b);
        }
      FastLED.show();
    }
  }
}
```

# Planning

## Work Items Pending

- Scss, So far I chosed to use Ionics own components and style.
- Component to set color for every single led on strip. Needs arduino code first.

## Work Items In Process

## Work Items Done

- Installed Ionic angular
- Initiated Git and added .gitignore
- Created Readme file
- Routing, Ion-tabs
- Header component
- Bluetooth connection page
- Brightness component
- Colorpicker component
- Led page
- Home page
- Rainbow component
