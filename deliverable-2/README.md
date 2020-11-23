# Ontario Park

## Description 

Ontario Park is a geo-audio and realtime-locating mobile application that provides natural, cultural, and historical information and anomalies of Ontario parks based users’ interest. Our application aims to solve the problem of a lack of access of informatino of your surrounding when you are walking in parks.

Imagine walking in a part and seeing a beautiful plant or am amazing architecture but you have no resource to learn about what is that beautiful plant or what is the background story of that amazing architecture. Our application will provide you with that information as you are walking in the park!

To simplify the limit the scope of our problem statement, we focus on providing natural, cultural, and historical information in High Park.


 
## Key Features
  * Frontend:
    * Displays points of interests and allows user to choose between them by clicking the markers <br />
    ![](./demo/ChoosePoint.gif)
    * Provides more knowledge by having a detail page that is accessed by clicking the text pop out after clicking the marker <br />
    ![](./demo/DetailPage.gif)
    * Having a interactive map that allows user to see different part of the park as well as location of infrastructures <br />
    ![](./demo/Map.gif)
    * Plays audio of the location by clicking the play button after choosing the marker you want to hear about <br />
    ![](./demo/PlayAudio.gif)
    * Access accessibility page through a choice in the setting <br />
    ![](./demo/Accessibility.gif)

 * Backend:
   * By visiting the url https://ontario-park.herokuapp.com/api/attractions, users can retrive the following information
     * Getting a list of all the tourist attractions
     * The longitude and latitude of each of the tourist attractions
     * A description of each of the tourist attractions
     * A url to the audio file and the image file of each of the tourist attractions

 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
 ## Development requirements
 
 The backend application is hosted on heroku and we currently have one route (get all tourist attractions) that is functioning. If users are interested in accessing the API of our application, they can simply visit https://ontario-park.herokuapp.com/api/attractions. 
 
 * Note that we did not implement CI/CD for the backend since the backend at the moment is very simple with only one route. We decided to implement CI/CD in Deliverable 3 as the complexity of the backend application increases.
 
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 
 ## Deployment and Github Workflow
 
  * Frontend:
 
  * Backend:
  
      Each team member in the backend team is responsible for handling one portion of the backend application. Ka Chun Mo first setup the code and the folder structure of the backend application, connected the application to our database (MongoDB), and hosted the application on heroku. Zhiyuan Lu then implemented the API of our application. Wang Ting Shu is responsible for setting up the crucial part of storing our audio and image files in our DigitalOcean server. Since we divided our tasks in a sequential manner, there is no conflicts in our backend applications.

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
