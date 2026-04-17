# Notes App Backend

**🚀 Base URL / Live API:** [https://notes-app-1-k021.onrender.com](https://notes-app-1-k021.onrender.com)  
**📘 Postman Documentation:** [https://documenter.getpostman.com/view/50871368/2sBXqDs3bf](#) *(Publish your Postman collection and paste the URL here)*

A simple RESTful API for a notes application built with Node.js and Express.

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
