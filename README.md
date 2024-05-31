# PERN To Do App <!-- omit from toc -->

https://pern-todo-app-frontend.onrender.com/

Please note that as this app is deployed on Render's free tier, the database connection is slow to start. This means that the app may intially appear incomplete while the connection is made. 

![A screenshot of my app](/docs/readme_img_1.png)

- [Learning Outcomes](#learning-outcomes)
- [Deployment](#deployment)
- [Key Features](#key-features)
  - [Add a Todo](#add-a-todo)
  - [View Todos](#view-todos)
  - [Edit Todos](#edit-todos)
  - [Delete Todos](#delete-todos)
- [Technologies](#technologies)
  - [Back End](#back-end)
  - [Front End](#front-end)
- [API Diagram](#api-diagram)
- [Routes](#routes)
- [Database](#database)
- [Testing](#testing)
- [Setup](#setup)
- [Prospective Improvements](#prospective-improvements)

---

## Learning Outcomes

The purpose of this app was the practical application of recent learning. It gave me the opportunity to practise with some technologies and production stages for the first time. My goals were:
- To build my first full stack application using the PERN stack
- To implement Swagger documentation
- To successfully deploy my first full stack application

## Deployment

As this was the first time I have deployed a full stack application, there were many difficulties to overcome. I have previously used Render to deploy a simple app that did not have access to a database or fully functioning back end. I was unable to find a comprehensive guide for deployment that related to the app I had built, so had to figure a lot out myself before I was eventually successful. 

Three deployments were necessary to support the app:
- Render Database
- Render Web Service for the backend
- Render Static Site for the frontend

## Key Features

### Add a Todo

A text-based input which the user can use to add a new Todo. Once submitted, the page refreshes and the user can see their latest entry added to the list.

### View Todos

The existing todos are pulled from the database and mapped into table rows. The use of useEffect keeps this list up to date. 

### Edit Todos

Each todo has an edit button that brings up a Bootstrap modal component. The user is able to update their selected todo. Once edited, they can click the modal's 'Edit' button to finalise the change. If the user instead clicks the 'Close' or 'X' buttons, our outside of the modal, the changes will not be made and the todo item will have reverted next time the user opens the modal.

![A screenshot showing the Edit modal](/docs/readme_img_2.png)

### Delete Todos

The user can delete a todo with the 'Delete' button. It disappears instantly.

## Technologies

### Back End

- PostgreSQL
- Node.js
- Express.js
- Nodemon
- Swagger

### Front End

- React v18
- Bootstrap


## API Diagram
![A diagram showing the way the front and back ends of the API interact with each other](/docs/readme_img_3.png)

## Routes

| Route | Method    | Description    |
| :-----: | :---: | :---: |
| /todos | POST   | Add a new todo   |
| /todos | GET   | Get all todos   |
| /todos/:todo_id | PUT   | Update todo by ID  |
| /todos/:todo_id | DELETE   | Delete todo by ID   |

## Database

Due to the simplicity of my database and its single table I have not included a schema. The table is as follows:
| todo_id | description |
| :-----: | :---: |
| 1 | "Swab the deck" |


## Testing
- Database and server testing was done with Postbird
- API routes were tested with Postman
- You can access Swagger documentation for the API by going to `http://localhost:5000/api-docs/`.

![A screenshot of the Swagger documentation that accompanies this API](/docs/readme_img_4.2.png)

## Setup

1. Clone/download copy of this repository
2. Using the command line, navigate to the `/server` subdirectory and run `npm install` to install package dependencies found in the `package-lock.json` file
3. Create a PostgreSQL database using the commands in `database.sql` file in `/server/src/db`
4. Create a `.env` file based on the `.env-example` file
5. Update database settings if neccessary in `/server/src/db.js`
6. In the command line, run `node server.js` or `./node_modules/.bin/nomon server.js` to make use of Nodemon
7. In command line, navigate to `/client` subdirectory and run `npm install` to install package dependencies found in the `package-lock.json` file
8. Run `npm start` to start the React app
9. The application should launch in your browser, and can be accessed at `http://localhost:3000`

## Prospective Improvements

To avoid 'mission-creep' I avoided expanding the capabilities of this app, instead focusing on something simple and deliverable that would hit my learning outcomes. However I was able to identify some improvements that would practise other technologies:
- The implementation of user accounts would make use of Passport.js & brypt
- Giving the user the ability to create and edit separate to-do lists would greatly increase the size of the app. It would require more database tables and give the user the ability to create and implement React components