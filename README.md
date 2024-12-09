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
