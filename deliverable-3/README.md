# Ontario Park

## Description

Ontario Park is a geo-audio and realtime-locating mobile application that provides natural, cultural, and historical information and anomalies of Ontario parks based users’ interest. Our application aims to solve the problem of a lack of access of information of your surrounding when you are walking in parks.

Imagine walking in a part and seeing a beautiful plant or am amazing architecture but you have no resource to learn about what is that beautiful plant or what is the background story of that amazing architecture. Our application will provide you with that information as you are walking in the park!

To simplify the limit the scope of our problem statement, we focus on providing natural, cultural, and historical information in High Park.

## Key Features
**By visiting the url https://drive.google.com/file/d/1htnVTtw6O20NylVkSgba7o0jAmRWtjU2/view, you can see a demo video of the application**

   
  - Select the category of interests that will display on the map <br/>
   
  - Display points of interests and allows user to choose between them by clicking the markers <br />
    
  - Provides more knowledge by having a detail page <br />
    
  - Having a interactive map that allows user to see different part of the park as well as location of infrastructures <br />
    
  - Plays audio of the location by clicking play after choosing the marker you want to hear about <br />
    
  - Access accessibility mode through a choice in the setting <br />
  Change display of attractions/interests in map into a list of attraction title, user can still play the audio by clicking on a certain title.
  (it's people with vision disability)
  
  - embedded GPS position <br/>
  Application can dynamically display the closest Park map available in the database to the user.
  
  - auto play audio when getting close to an interest <br/>
  The Audio will play by default the GPS location of user get closed to a certain interest.
  
  - local Storage <br/>
  Only load select category page at first when user first open the app
  after that the category will get stored inside local storage and from then on, the first page shown in the app will be the map page
  


## Instructions

An APK file called ExploreOntario.apk has already been generated and placed in the directory for you to load on an Android device.

### Categoroy Page
- click on correspond category button to make the category selected (green implies it is active)

- click on the category again will deactivate this category (grey implies it is inactive)

- click *continue* to confirm the selection of categories and continue to the next page
### Map Page (Home page)

- No registrations are needed.
- Consists of an interactive map and features you can interact with.

#### Map

- Drag the map in the desired direction to explore different parts of the park and the markers highlighting the locations of infrastructures.

#### Map Marker

- Click on any red map markers on the map.
- This displays the subject of the location of infrastructure right above the marker.

#### View Detail of Infrastructure

- Click on any red map markers on the map. It should display the subject of the location of infrastructure right above the marker.
- Click on the subject tag that appeared above the marker you just clicked.
- This takes you to the detail page, where you can read more information about the infrastructure.

#### Play Audio

- Before you click on the play-audio button, click on a marker you are interested in. Otherwise, it will play the audio of the default subject.
- Click on the button with a play-audio icon located at the bottom-middle of the map page.
- This plays the audio of the marker you have clicked on.
- Click on the button again to stop the audio.

#### Go to Setting

- Click on the button with a setting icon located at the bottom-left of the map page.
- This takes you to the setting page where you can set the accessibility mode.

### Detail Page

- Consists of a title, an image, and a description of the infrastructure.

#### Back to Map

- Click on the back button on the top-left of the detail page.
- This takes you back to the map page.

### Setting Page

- Consists of a switch that enables or disables the accessibility mode.

#### Back to Map / Accessibility Mode

- Click on the back button on the top-left of the setting page.
- If accessibility mode is disabled, this takes you back to the map page.
- If accessibility mode is enabled, this takes you to the accessibility page.

#### Go to Category
- Click on the *Select Category* on the button of the setting page.<br/>
it will go to the category page and let user reselect the categories.


### Accessibility Mode

- Consists of all the infrastructures and their audio.

#### Play Audio

- Click on a play-audio button next to a subject.
- This plays the audio of the related topic.
- Click on the same button again to stop the audio.

#### Back to Setting

- Click on the button on the top-left of the accessibility page.
- This takes you to the setting page where you can set the accessibility mode.

## Backend

Please go into the directory title `Backend` if you want to look at our API references.

## Development requirements

### Front End Development Installing

**developer need to do installation both on the mobile device and PC to run the application**.

#### Installation on PC

install Node js in the local machine.

```
https://nodejs.org/en/download/
```

install expo in the local machine (Windows):

```
npm install expo-cli --global
```

install expo in the local machine (Linux/MacOS):

```
sudo npm install expo-cli --global
```

Clone this repository to local machine.

```
https://github.com/csc301-fall-2020/team-project-15-ontario-parks.git
```

change directory on terminal to the project front end location and run npm i to install all the dependency.

```
cd <project_location>
cd ./deliverable-2/MobileFrontend/OntarioPark
npm i
```

### Installing on mobile device

**ios device:**

- open app store on the device and download _Expo Client_.

**android device:**

- open Google Play store on the device and download _Expo_.

### Backend Development Installing:

- Install Node.js on your local machine.
- Step into the backend project directory and run `npm install` in terminal
- Run `npm start` in terminal
