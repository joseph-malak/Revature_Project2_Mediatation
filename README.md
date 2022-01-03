# Title of the Project: Reconnect (Meditation Application)

## Explanation and Overview of the project:

* An interactive tool for the user to do various styles of meditation.


## List of features implemented:

* Select a meditation of various styles.
* Timer for the duration of the meditation.
* User can add journal notes after they have completed the meditation.


## Technologies used

* Maven
* Spring API
* HTML
* CSS
* Bootstrap
* React


## How to set up:

* Download full backend repo on: git@github.com:christianlombardo/Revature_Project2_Mediatation.git
* Download full front end repo on: https://github.com/christianlombardo/revature_project_2
* Open up IntelliJ and select this downloaded project from the folder you saved it in.
* On IntelliJ run src/main/com.revature.springrestapi/SpringRestApiApplication
* Open up VS Code in the front end project directory (React).
* in the VS terminal type npm start
* The application will then automatically open in your browser.


## Postman Tests

* Write a test user (POST method) http://localhost:9001/users/register
    ```
    {
        "name": "testusername",
        "email": "tesusername@tesusername.com",
        "password": "123",
        "meditationInterests": "Relax, Breathe, Focus, Mantra."
    }
    ```

* Gets all users: (GET method) http://localhost:9001/users
* Writes Journal notes (POST method) http://localhost:9001/users/journal
    ```
    {
        "userid": 1,
        "journalnotes": "Hello more journal notes do it.... "
    }
    ```

* Reads All Journals From user id 1 (POST method) http://localhost:9001/journals/1


## Contributors:

* Christian Lombardo
* Joseph Malak


## License information:

* Public domain software.