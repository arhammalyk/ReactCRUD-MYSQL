Home-Assessment task

Overview
This project is a simple web application that allows users to manage a list of tasks. The application demonstrates basic CRUD (Create, Read, Update, Delete) operations.
	
 	Features
•	Add new tasks
•	View existing tasks
•	Edit tasks
•	Delete tasks
•	Validations

	Technology Stack
 
	Frontend
•	React.js
•	Tailwind CSS
•	HTML CSS
•	Redux for state management

	Backend
•	Node.js
•	Express.js

	Database
•	MySQL

	Prerequisites
•	Node.js
•	MySQL
•	Git


	Installation and Setup
	Clone the Repository
	git clone https://github.com/arhammalyk/ReactCRUD-MYSQL.git
	cd ReactCRUD-MYSQL


	git clone git@github.com:arhammalyk/ReactCRUD-MYSQL.git
	cd ReactCRUD-MYSQL


	Backend Setup
1.	Install Dependencies:
	cd BackEnd
	npm install
2.	Database Configuration:
•	Create a MySQL database named todo-list.
•	Update the BackEnd/.env file with your database credentials:

	PORT=your_port
	JWT_SECRET="your_secret"
	DB_HOST='localhost'
	DB_USER='root'
	DB_PASSWORD='yourpassword'
	DB_NAME='todo-list'

3.	Start the Server:
	npm start
	Frontend Setup

1.	Install Dependencies:
	cd frontend
	npm install

Update the env file
REACT_APP_LOCAL="your_port"
2.	Start the Frontend Development Server:
	npm start
 
Usage
1.	Open the application in your browser at http://localhost:3000.
2.	Use the input field to add new tasks.
3.	View the list of tasks.
4.	Edit or delete tasks as needed.
5.	
Project Structure
•	Contains the React.js frontend application.
•	Src/state (Every api call is in redux action creator)
•	backend/ - Contains the Node.js/Express.js backend application.

API Endpoints

•  Create a User
•	Endpoint: POST "/user/signup/"
•	Description: This endpoint is used to create a new user. The client sends a POST request with user details password, email to register a new account.

•  Sign In a User
•	Endpoint: POST "/user/signin/"
•	Description: This endpoint is used to authenticate a user. The client sends a POST request with login credentials username and password and the server responds with authentication details (e.g., token) if the credentials are valid.

•  Create a User Table
•	Endpoint: POST "/user/createUsersTable/"
•	Description: This endpoint is used to create a table in the database specifically for storing user information. This might be part of the initial setup or during application deployment.


  Add and Save a New Task for the User
•	Endpoint: POST "/task/addNewTask/"
•	Description: This endpoint allows authenticated users to add and save a new task. The user must be logged in to perform this action. The client sends task detail (e.g. description) to the server, which then stores the new task in the database.

•  Get All Tasks for a User
•	Endpoint: GET "/task/getUserTasks/"
•	Description: This endpoint retrieves all tasks associated with the authenticated user. The user must be logged in to access their tasks. The server responds with a 	list of tasks belonging to the user.

•  Update an Existing Task for a User
•	Endpoint: PUT "/task/updateUserTask/
•	Description: This endpoint allows authenticated users to update an existing task. The user must be logged in to perform this action. The client sends updated task details to the server, which then updates the task with the specified ID in the database.

•  Delete an Existing Task for a User
•	Endpoint: PUT "/task/deleteUserTask/
•	Description: This endpoint allows authenticated users to delete an existing task. The user must be logged in to perform this action. The client sends a request to delete the task with the specified ID, and the server marks the task as deleted in the database.

•  Create a Task Table
•	Endpoint: POST "/user/createTasksTable/"
•	Description: This endpoint is used to create a table in the database specifically for storing tasks. This might be part of the initial setup or during application 	deployment.





