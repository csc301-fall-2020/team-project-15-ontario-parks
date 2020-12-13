# Explore Ontario
Explore Ontario is a mobile application utilizing geofencing technology to provide users information of their interest based on categoriees that they have selected. Our application aims to create a sense of discovery and help our user discover places that interests them when they are exploring parks in Ontario.

This is a mobile application that acts as the frontend of Explore Ontario. It is implemented with [React Native](https://reactnative.dev/) with [Expo](https://docs.expo.io/) framework.

## Getting Started

These instructions will get you a copt of the program up and running.
**developer need to do installation both on the mobile device and PC to run the application**.

### Installing on a computer
install Node js in the local machine(Skip if you already have node installed):
```
https://nodejs.org/en/download/
```
install expo in the local machine (Skip if you already have node installed):
 * Windows:
    * `npm install expo-cli --global`
  * Linux/MacOS:
    * `sudo npm install expo-cli --global`

Clone this repository to local machine:
```
git clone https://github.com/csc301-fall-2020/team-project-15-ontario-parks.git
```
change directory on terminal to the project front end location and run npm i to install all the dependency:
```
cd <project_location>
cd ./deliverable-2/MobileFrontend/OntarioPark
npm i
```

### Installing on mobile device
**ios device:**
  - open app store on the device and download *Expo Client*.

**android device:**
  - open Google Play store on the device and download *Expo*.

## Running the app
You can run the app by following command after change directory into the project front end location.

```
expo start
```
It would open up a page running on http://localhost:19002/ and open up the web page on your default web browser.

Scan the QR code on the web page to open up the app on your mobile device.

## Building And Deploying

### For Android
You can build the application for android by running the command:
```
expo build:android
```
