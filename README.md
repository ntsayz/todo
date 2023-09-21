## Application Features:

### Core Features:

### Home Page
**URL**: `/#/`

- **Todos**: 
    - View a list of all todos.
    - Filter todos based on criteria (e.g., completed, in-progress).
    - Search functionality to find specific todos.
    - Add new todos directly from the home page.
    - Mark todos as completed.
    - Edit or delete todos.

### Sign In/Sign Up Pages
**URLs**: `/#/login`, `/#/register`

- **User Authentication**:
    - Secure JWT-based authentication mechanism.
    - Token stored in `localStorage`.
    - Option to "Remember Me".
    - Forget password functionality with email reset option.
    - Input validation and feedback.
    - **Note**: Authentication can be switched to session/cookie-based.

### Profile Page
**URL**: `/#/profile/:username`

- **User Information**:
    - Display basic user details.
    - Option to edit profile.
    - View user-specific todos.
    - Option to change password.
    - Avatar or profile picture display.


## API Endpoints:

- [User Management](#user-management)
    - [Register](#post-usersregister)
    - [Login](#post-userslogin)
    - [Retrieve Profile](#get-usersprofileusername)
- [Todos Management](#todos-management)
    - [Fetch Todos](#get-todos)
    - [Add Todo](#post-todos)
    - [Update Todo](#put-todosid)
    - [Delete Todo](#delete-todosid)
- [Profile Management](#profile-management)
    - [Edit Profile](#put-usersprofileusernameedit)
    - [Change Password](#put-usersprofileusernamechangepassword)


### **User Management**

### **POST** `/users/register`
**Purpose**: New user registration.

**Body**:
```json
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```

Response:

    200 OK with user object if successful.
    Error messages for validation failures.

### **POST** `/users/login`

**Purpose**: Existing user login.

**Body**:
```json
{
    "email": "string",
    "password": "string"
}
```

Response:

    200 OK with JWT token if successful.
    Error message for invalid credentials.

### **GET** `/users/profile/:username`

**Purpose**: Retrieve basic user info.

**Parameters**:

    - `username`: The username of the user.

**Response**:

    200 OK with user object


### Todos Management

### **GET** `/todos`

**Purpose**: Fetch all todos for the logged-in user.

**Response**:

    200 OK with an array of todo objects.

### **POST** /todos

**Purpose**: Add a new todo.

**Body**:
```json
{
    "title": "string",
    "description": "string"
}
```
**Response**:

    201 Created with the created todo object.

### **PUT** `/todos/:id`

**Purpose**: Update an existing todo.

**Parameters**:

    - `id`: The ID of the todo to be updated.

**Body**:
```json
{
    "title": "string",
    "description": "string",
    "is_completed": "boolean"
}
```

**Response**:

    200 OK with the updated todo object.

D### **DELETE** `/todos/:id`

**Purpose**: Delete an existing todo.

**Parameters**:

    - `id`: The ID of the todo to be deleted.

**Response**:

    200 OK with a confirmation message.

### Profile Management


### **PUT** `/users/profile/:username/edit`

**Purpose**: Edit user profile.

**Parameters**:

    - `username`: The username of the user.

**Body**:
```json
{
    "username": "string",
    "email": "string",
    "avatar_url": "string"
}
```

**Response**:

    200 OK with the updated user object.


### **PUT** `/users/profile/:username/changepassword`


**Purpose**: Change user password.

**Parameters**:

    username: The username of the user.

**Body**:
```json
{
    "old_password": "string",
    "new_password": "string"
}
```

Response:

    200 OK with a confirmation message.

