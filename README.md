# PERN_ToDo_App

---

## Key Features

### Add a Todo

A text-based input which the user can use to add a new Todo. Once submitted, the page refreshes and the user can see their latest entry added to the list.

### View Todos

The existing todos are pulled from the database and mapped into table rows. The use of useEffect keeps this list up to date. 

### Edit Todos

Each todo has an edit button that brings up a Bootstrap modal component. The user is able to update their selected todo. Once edited, they can click the modal's 'Edit' button to finalise the change. If the user instead clicks the 'Close' or 'X' buttons, our outside of the modal, the changes will not be made and the todo item will have reverted next time the user opens the modal.

### Delete Todos

The user can delete a todo with the 'Delete' button. It disappears instantly.

---

## Technologies

### Back End

- PostgreSQL
- Node.js
- Express.js
- Nodemon

### Front End

- React v18
- Bootstrap

---

## Setup

1. Clone/download copy of this repository
2. Using the command line, navigate to the `/server` subdirectory and run `npm install` to install package dependencies found in the `package-lock.json` file
3. 
