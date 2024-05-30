# PERN To Do App <!-- omit from toc -->
![A screenshot of my app](/docs/readme_img_1.png)

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
- [Swagger](#swagger)
- [Setup](#setup)

---

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

---

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

---

## API Diagram
![A diagram showing the way the front and back ends of the API interact with each other](/docs/readme_img_3.png)

## Routes

| Route | Method    | Description    |
| :-----: | :---: | :---: |
| /todos | POST   | Add a new todo   |
| /todos | GET   | Get all todos   |
| /todos/:todo_id | PUT   | Update todo by ID  |
| /todos/:todo_id | DELETE   | Delete todo by ID   |


## Swagger
You can access Swagger documentation for the API by going to `http://localhost:5000/api-docs/`.

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
