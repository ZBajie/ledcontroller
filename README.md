# RGB Led controller app

An app to control an rgb-led strip conected to an arduino.

The app sends a string with a comand and a value with bluetooth to the arduino.

The string that is sent should look like this:

- Brigthness : <brigthness#88> , Value between 0-255.
- Color: <setLedColorAll#128,128,128> , RGB values.

# Installation

ionic start ledcontroller blank --type=angular

## Running

### For web

ionic serve

### For android

ionic build
ionic cap add android

Start Android studio.

Import android mapp.
Connect mobile and press play.

# Planning

## Work Items Pending

- Scss
- Colorpicker component

## Work Items In Process

- Home page
- Led page
- Brightness component

## Work Items Done

- Installed Ionic angular
- Initiated Git and added .gitignore
- Created Readme file
- Routing, Ion-tabs
- Header component
- Bluetooth connection page
