# Uber Backend API Documentation

## Overview
This repository contains a simple Express.js backend for user registration.
The backend exposes a single active endpoint under `/users`.

## Base URL
- `http://localhost:<PORT>`
- The server reads `PORT` from `.env` and starts from `backend/server.js`.

## Endpoint
### Register User
- **URL:** `/users/register`
- **Method:** `POST`
- **Description:** Creates a new user account after validating the request data.

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

### Validation Rules
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

### Successful Response
- **Status:** `201 Created`
- **Example:**
```json
{
  "token": "<jwt-token>",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

### Error Responses
- **Validation failure:** `400 Bad Request`
- **Example:**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **Duplicate user:** `400 Bad Request`
- **Example:**
```json
{
  "message": "User already exist"
}
```

## Files Involved
- `backend/app.js` - Express app configuration and route registration.
- `backend/routes/user_router.js` - Defines the `/register` route and request validators.
- `backend/controllers/user_controller.js` - Handles validation, user lookup, password hashing, and response generation.
- `backend/services/user_services.js` - Creates the new user record via `user_model`.
- `backend/server.js` - Starts the HTTP server.

## Usage
1. Install dependencies in `backend/`:
   ```bash
   npm install
   ```
2. Set `PORT` in `backend/.env`
3. Start the server:
   ```bash
   npm start
   ```
4. Send a POST request to `http://localhost:<PORT>/users/register`.
