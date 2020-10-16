# Ontario Parks

## Product Details
 
### Q1: What are you planning to build?

**We are planning to build a geo-audio, real-time locating mobile application that provides natural, cultural, and historical information and anomalies of Ontario parks based users’ interest.** We want to keep in mind that we should design our application to be accessible to people with disabilities. (emphasized by our partner)

**We want to provide information to people who are curious about their surroundings when they are walking in a park.** Is there a park that you visited the most and you would love to learn about the most popular trail but there is no way to know that information? Or is there a time you went to a park and saw a garden of peculiar flowers that you were so curious about but there was no way to learn about them? What about if there is a mobile application that provides all the information that you need based on your interest and curiosity!

There is always endless information around you if you are curious about your surroundings when you are walking in a park. However, it is not always easy to learn about your favorite park because it would be mad to put up signs at every possible place that deserve some showcasing. **Our mobile application will pick up the real time-location from the user. Based on the user’s real-time location, we will present the user with audio and text-based information about the user’s surroundings such as information about plants, historical sites, animals, tourist attractions, etc.** Users can customize the application based on their interest. For example, if a user only wants to learn about the surrounding plants, our application will only provide audio and text-based information about the surrounding plants. If a user is a history fanatic, our application will only provide audio and text-based information about the surrounding historical sites.


### Q2: Who are your target users?

The target users of our mobile application are **teachers**, **students**, and **people who frequently visit parks**.
 
For teachers and students, we want to provide an educational platform for them. Our mobile application provides natural, cultural, and historical information and anomalies of Ontario parks. Therefore, they do not need to read signs or listen to the general information from the tour guide. Besides these, they can see interesting locations next to them and visit the locations that interested them. Our mobile application gives students information about this park and the stories behind it, which meets the teacher's goal for the trip.
 
For people who visit the park frequently, we aim to build a mobile application that has answers for their curiosities about the park and notify them of any updates. As they walk through the park, they may wonder what flowers, animals, or trees are in front of them or what is the difference in the park among seasons. Then, they can use our mobile application for the answer. Also, for any updates in the park, they will be noticed immediately by the mobile application.
 
It is inconvenient for people with weak vision or vision problems to read signs in parks. We want to keep in mind that we want our application to be accessible for those who have disabilities. We want to help them by transferring visual information to an audio information/story. Thus, they can have an understanding of the park and avoid having a hard time reading the signs.


### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Our product allows users to discover new information about the environment around them according to their interest. In this way, every user can have their own view of the park. The application can also change the park introduction/information based on season, animals around etc. Hence, every single trip to the park is unique.

Also, our product provides parks’ official websites and maps. It has all directional signs and guides within the app. Therefore, we can decrease the use of physical signs in the park and leave more space to nature.

Moreover, our product provides users with more detailed information compared to existing applications. Since it would be developed for parks, it would focus more on guided information and nature compared to a regular app and our voice guide is also an unique feature.


### Q4: How will you build it?

* Frontend (Mobile): React Native
* Backend: Django
* Audio file storage: DigitalOcean
* CI/CD: Circle CI
* Deployment: apk(frontend), Heroku(Backend)

We will be using React Native for our frontend. React Native's syntax and concepts are similar to those of React which most of our team members have experiences in. It also provides us with the ease of development since we do not have to learn iOS and Android development seperately and we can build our application using React Native and deployed on both platform.

We will be using Django for our backend, because Django is “batteries included” which means that Django comes will most of the libraries and tools required for common use cases out of the box. Also, Django is built with python which is a language that most of our team members are familiar with. It also comes with a fully functional ORM that makes it very easy to work with database queries.

We are using SQL for the database. Since we need to store detailed information (audio, picture) about the park, the data will be huge and SQL is able to handle such big data. Also, SQL allows a single database design being asked by a broad set of questions, which is ideal for our project. SQL is the database language that our team members are mostly familiar with.

We will be using CircleCI as our continuous integration tool, because CircleCI is able to perform tests across different frameworks and languages. We are using Django(Python) and React Native(JavaScript) and we would like a single platform that can handle both frameworks.

### Q5: What are the user stories that make up the MVP?

 * As a teacher, I want to let my students learn more about the park in order to meet the education needs on this sort of trip.
   * Acceptance Criteria: Provide more knowledge to user compared to signs that is already in the park
 * As a student, I want to see where the interesting locations are relative to my location in order to go there faster.
   * Acceptance Criteria: Have marks on the locations that are important
 * As a resident around the park, I want to be notified when there is something interesting around me when I am walking in the park so that I can have a sense of discovery in a park that I have walked hundreds of times.
   * Acceptance Criteria: Can notify user in some mean when they pass some location that might interest the user
 * As a tourist, I want to hear and see only what I am interested in because I do not have much time to spend in the park.
   * Acceptance Criteria: Able to display only the locations that have something that might interest the user
 * As a first time visitor, I want to use the app as a map in the park in order for me to navigate through the park.
   * Acceptance Criteria: Can display internal routes(if available) and public infrastructures(e.g.: toilet) on the map
 * As a person with bad sight, I want to be able to use the app in order to discover what I am not able to see before.
   * Acceptance Criteria: The user interface is friendly to people with bad eyesight


----

## Process Details

### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)
 * Roles
   * Product manager: oversee the whole project and to set deadlines for tasks
   * Backend developers: RESTful API development, data and application integration, core application logic
   * Frontend developers: design UI, implement the frontend
   * Database: design the database schema
   
Ka Chun (Franco) Mo will mainly be responsible for backend development. Also, he will be the main liaison to communicate with the partners. He is familiar with various coding languages such as Python and JavaScript. He has experience in developing web applications - both frontend using React and backend using Node.js. He also has some experience working with RESTful API. However, he lacks the experience in designing an impeccable database schema. He sometimes has a hard time to keep up with the project schedule (But hey, this is where our beloved product manager comes into place!). He also needs to pick up with the backend technology - Django - as he has no prior experience using it.

Calvin Yu will mainly be responsible for the mobile frontend development and will also be responsible for some roles for product management like coordinating meetings and overseeing the progress of the whole project. He is familiar with Python and JavaScript, worked on Android apps, and also frameworks such as React and Node.js that will be used in the mobile front-end. What he lacks is his experience in things like UI design, testing, and also mobile development using React Native. In his previous mobile development experience, the app is developed for just the demonstration of knowledge and was not built for users. The lack of experience in building UI might cause him some struggles when taking his park on building the mobile front-end. He has used React for web development before and has used Java for mobile development but he does not have any experience in combining the two together. Lastly, he rarely tests his code thoroughly using methods like unit test and he will need to adapt to the new developing environment since we are all expected to test our own code thoroughly.

Sherry Wang will mainly work on front-end development. She is familiar with various coding languages, such as Python and Java, and has experience developing Android applications, designing a database schema, and designing UI. However, she lacks the expertise in developing web applications as she is currently learning it. She is also not familiar with React that will be used in the mobile front-end. Lastly, she is still mastering her writing skills.

Wang Ting Shu will mainly focus on the database side of the development. He is familiar with various coding techniques such as PHP, SQL and Json. He is able to create a secure server to store all the data needed for the project. Also creating a database to allow access to anything the application needs. He is not as good in front end development, lacking experience in framework for front end like Node.js. And he is also sometimes late on his dues. He will also focus on on-site data gathering if there is any needed, going to the physical parks that we are researching to gather more information from people there like park security or information centres.

Zhiyuan Sun will work on backend development mainly. He is familiar with python, Java and has some experience with developing mobile applications. He also has some experience on reading and using APIs. What he lacks is that he is not familiar with the backend library - Django - that he is going to use in this project. Also, he lacks experience with Javascript as he is learning it currently. Moreover, he lacks communication experience on a large scale project.

Yingke Wang will mainly work on front-end development. He has previous experience in frontend Design and familiar with React. He also understands the basic principles for UI design and is willing to explore more. However, he is not proficient in the backend environment. Being responsible for frontend development, he can utilize what he is good at and contribute more efficiently at the project. 


### Q7: What operational events will you have as a team?

* We will having meetings on Zoom at 7:30 pm every Saturday. The duration of the meeting will be 1 hour or more.
* We will have a weekly group meeting for 1 hour or more. The purpose of this meeting is to go over what we have done last week, see what we have accomplished, rate ourselves on the success of this week, and see what we could improve on in the coming weeks. Also, we will discuss what to do next week and what to discuss in the next partner meeting.
* At least once a week we will be doing a coding review. The time of the review will be flexible according to members' time. The review will be role specific and can be done in small groups. We can have meetings for specific problems that don’t necessarily need the whole team to meet together.
* Partner meetings
  * We listened to the project idea from our partner and discussed how the project can be done and the limitations of his idea. We gave a brief feedback of what we thought and discussed the overall outcome of the project. The outcomes of this meeting was we have a better understanding of what our partner wants to accomplish and gave our partner a vision of what we could accomplish. The meeting was 57 minutes. Our meeting time will be every Wednesday 1:00 pm to 2:00pm.
  * Our second partner meeting was on October 14th. Our team went over our deliverable 1 with our partner and also presented how we envision the minimum viable product. Our partner reminded us of the accessibility aspect of the project and promised to look for data for our project. We agreed on recurring meeting on every Wednesday.
  
### Q8: What artifacts will you use to self-organize?

We have chosen Asana to organize our team. We will use the task board on Asana to keep track of what needs to be done and assign due dates, assignee, and priority for each task. We will use the kanban approach in the assignment of tasks, every one will choose what they want to do in the tasks and assign those tasks to themselves. When there is a task that is not assigned, we will discuss it as a group and find out a way to implement the feature. We will discuss the status of work for a particular task during the weekly meeting and code reviews and we also decide what to add to the kanban board during the weekly meetings. Every person in the team is responsible for testing their codes and they will demonstrate what they have done to ensure the feature and correctly implemented during the code review. We are not tracking our meeting minutes because we are continuously updating our teammates about the status of our work on certain features using social media platforms and meeting is just for keeping everyone up to date on the status of the whole project. 

### Q9: What are the rules regarding how your team works?

**Communications:**
We are using WeChat for team communication, and we are expecting to have at least two team meetings per week. We are using Zoom for weekly partner meetings. We will also use emails and phone calls for quick responses from our partner. Also, we are meeting with the TA during the weekly tutorial time with Zoom.
 
**Meetings:**
All meetings are mandatory. If one cannot attend a meeting or complete action items, one should notice the team as soon as possible.
 
**Conflict Resolution:**
1. Team members have different coding styles (comments, variable naming convention, tab or space)
   1. All team members should agree on one style before any coding process.
1. A team member edits others’ code without any notice.
   1. No one can edit others’ code without notice. Any modifications can be made during code review.
1. A merge conflict occurs.
   1. Team members working on the same feature should work on the same branch, discuss common parts, and push frequently.
1. Team members have different progress in completing tasks.
   1. Setting deadlines that everyone agrees on based on the complexity of work and everyone’s work productivity.
   
----
### Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.
 
During the process of completing team delivery 1, we have talked with our partner thoroughly and discussed what he wants to build and what we are able to offer. As a result, we discovered that one major obstacle that we faced is the lack of existing data and resources on the project. This forces us to make a decision on the source of our data. We are able to choose from creating the resource by ourselves or finding an existing data set from places such as the government of Ontario. We ended up choosing the first way because the data sets that we can find are not dense enough for our purpose, the data usually have kilometers of distance between each of the data points.

After choosing our data source, we faced another problem that is how can we create the resources by ourselves. We have considered using Arrowhead Provincial Park as the location because it is the park where our partner John works at. However, since we have a very limited timeframe on the project and we are not able to travel to the park for things such as recording the GPS coordinate of each point of interest, we have settled on High Park which is of a much manageable size and at a location that we are able to access more easily. This decision allows us to focus more on the program and product that we are delivering and less on the content that is presented and will ultimately help us deliver a better product where our partner can enrich the content afterwards.

Lastly, we decide on how we will work as a team. We can choose to work together on all parts of the program or divide into smaller groups that each focus on a single tech stack. We have chosen the latter for better efficiency on developing. Many of us have never used the framework/language that we are using in this project and focusing on a single tech stack will reduce the amount of time that we spend on learning and adapting to the new frameworks. Also, splitting into groups each focusing on a single part allows us to benefit from more abstraction. For example, someone working on the frontend will only need to know what the API that the backend group created will return to a request but do not need to dig into django and learn the framework from the beginning. This will make our work much more manageable since most of us are also working on other things such as PEY applications.
All of these decisions will ultimately help us to deliver a better product that can demonstrate the idea and vision of our partner. We are very excited to be working with John this time and are committed to deliver the best product we can.

