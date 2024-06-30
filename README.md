Task Manager Web Application

Overview
    This project is a simple web application that allows users to manage a list of tasks. 
    The application demonstrates basic CRUD (Create, Read, Update, Delete) operations.

    
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
    o	Create a MySQL database named todo-list.
    o	Update the BackEnd/.env file with your database credentials:

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
	
Project Structure
  •	Contains the React.js frontend application.
  •	backend/ - Contains the Node.js/Express.js backend application.

API Endpoints:
Create a user using POST "/user/signup/"
Sign in a user using POST "/user/signin/"
Create a user table using POST "/user/createUsersTable/"
Add and save user new task POST "/task/addNewTask/" login required
Get user all tasks using GET "/task/getUserTasks/". Log in required
Update user existing task using PUT "/task/updateUserTask/:id". Log in required
Delete user existing tasks using PUT "/task//deleteUserTask/:id". Log in required
Create a task table using POST "/user/createTasksTable/"
