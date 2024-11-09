# BE Car Management API 🚗

## Project Description

The Car Management API is a RESTful web service built with Node.js and Express.js, designed for managing car listings. This API allows users to create, view, update, and delete (CRUD) car records. Car data is saved in a JSON file, simulating a lightweight database.

## Features

- 🚘 List all cars with details like make, model, year, color, price, mileage, fuel type, transmission, and condition.
- 🔍 Fetch a specific car by ID.
- ➕ Add new cars to the collection.
- ✏️ Update existing car details.
- 🗑️ Delete cars by ID.
- 📜 Middleware for logging requests and validating car IDs.
- 📁 JSON file storage for data persistence.desktop devices

## Technologies Used

### Backend

- Backend: Node.js, Express.js
- Middleware: Custom middleware for logging requests and ID validation
- File System: Node.js fs module for handling JSON storage

## API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/api/v1/cars`     | Retrieve all cars    |
| POST   | `/api/v1/cars`     | Add a new car        |
| GET    | `/api/v1/cars/:id` | Retrieve a car by ID |
| PATCH  | `/api/v1/cars/:id` | Update a car by ID   |
| DELETE | `/api/v1/cars/:id` | Delete a car by ID   |

## Setup and Installation

### Backend

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/emreertugrl/BE_Car_API.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd BE_Car_API
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Access the API at:
   ```bash
   http://localhost:3000
   ```

## Middleware

- Logger: Logs each request with method and URL information.
- ID Control: Validates car IDs and returns a 404 response if the car is not found.

## Contact

For any questions or suggestions, feel free to reach out:

- Email: emreertugrl7@gmail.com
- LinkedIn: [emreertugrul7](https://www.linkedin.com/in/emreertugrul7/)
