# _ZooTracker_

#### _A Zoo animal management system, 05-05-2017_

####  By _**Janek Brandt**_

## Description

This project is a web application that allows zoo employees to track and manage animals. Zoo staff are able to add new animals to the system, edit existing animals as well as remove animals. Staff will be able to view all animals in the system and sort/filter them based on various criteria as well as view details for an individual animal.


## Planning

1. Configuration/Dependencies
  * ##### _Setup/Installation_
    * This application uses firebase for it's database.
    * Set up a new project in firebase and click on _**Add Firebase to your web app**_ to get your firebase config.
    * Create a new file `src/app/api-keys.ts` and place your firebase config into it. The file should look like this.
    ```
    export var masterFirebaseConfig = {
        apiKey: "xxxx",
        authDomain: "xxxx.firebaseapp.com",
        databaseURL: "https://xxxx.firebaseio.com",
        storageBucket: "xxxx.appspot.com",
        messagingSenderId: "xxxx"
      };
    ```
    * In the firebase console click on the _**Database**_ section and then on the _**RULES**_ tab. Set the rules to the following and then click _**Publish**_.
    ```
      {
        "rules": {
          ".read": true,
          ".write": true
        }
      }
    ```
    * From the project root folder run the following commands to install the project dependencies and run app.

    `npm install`

    `ng serve`

    * Navigate to `http://localhost:4200/`

  * ##### _Packages Dependencies_
    * `angularfire2`
    * `firebase`
    * `@angular/animations`
    * `@covalent/core`


2. Specs
  * A user is able to view all animals in the system.
  * A user is able to view all animals that meet a certain criteria.
  * A user is able to view details of an individual animal.
  * A user is able to add an animal to the system.
  * A user is able to edit an existing animal in the system.
  * A user is able to remove an animal from the system.


3. Integration
  * Component for new animal form.
  * Component for edit animal form.
  * Component for animal list.
  * Component for animal details.
  * Pipe to filter animal list.


4. UX/UI
  * Use [Teradata Covalent](https://teradata.github.io/covalent/#/) to implement material design.
  * Use css flexbox for layout.


5. Polish
  * Make site responsive on desktop and mobile.
  * Implement color scheme to make site accessible to visually impaired.
  * Test site with screen reader.
