# Notes App Backend

**🚀 Live API:** [https://notes-app-1-k021.onrender.com/api/notes](https://notes-app-1-k021.onrender.com/api/notes)  
**📘 Postman Docs:** [https://documenter.getpostman.com/view/50871368/2sBXqDs3bf](https://documenter.getpostman.com/view/50871368/2sBXqDs3bf)

A simple RESTful API for a notes application built with Node.js, Express and MongoDB.

## Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Variables**
    Create a `.env` file in the root directory with the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

3.  **Run the Server**
    ```bash
    npm start
    ```

## API Endpoints

### Notes

-   **GET /api/notes** - Get all notes
-   **GET /api/notes/:id** - Get a single note by ID
-   **POST /api/notes** - Create a new note
-   **PUT /api/notes/:id** - Update a note
-   **DELETE /api/notes/:id** - Delete a note
