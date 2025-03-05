# Rowyda Abdelrahem Essa
# ID/4211275

## Category Management API

This API is designed for managing product categories efficiently using Node.js, Express, and MongoDB. It provides endpoints to create, retrieve, update, and delete categories, making it a useful tool for e-commerce platforms, inventory management, and other related applications.

## Features
- RESTful architecture
- CRUD operations for categories
- MongoDB as a database
- Environment-based configuration
- Error handling and validation
- Easy integration with frontend applications

## Setup Guide

### Prerequisites
- Node.js installed (v14+ recommended)
- MongoDB installed and running locally or on a cloud database
- Postman or a similar API testing tool (optional)

### Installation Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/category-management-api.git
   cd category-management-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure environment variables:
   ```sh
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/category_db
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

## API Documentation

### Base URL
```
http://localhost:5000/api/categories
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/categories | Create a new category |
| GET | /api/categories | Retrieve all categories |
| GET | /api/categories/:id | Retrieve a category by ID |
| PUT | /api/categories/:id | Update a category |
| DELETE | /api/categories/:id | Delete a category |

## Request & Response Examples

### Create Category

**Request:**
```json
POST /api/categories
Content-Type: application/json

{
  "name": "Electronics",
  "description": "Electronic devices and gadgets"
}
```

**Response:**
```json
Status: 201 Created
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "Electronics",
  "description": "Electronic devices and gadgets",
  "isActive": true,
  "createdAt": "2023-06-22T14:30:00.000Z",
  "updatedAt": "2023-06-22T14:30:00.000Z"
}
```

### Get All Categories

**Request:**
```sh
GET /api/categories
```

**Response:**
```json
Status: 200 OK
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Electronics",
    "description": "Electronic devices and gadgets",
    "isActive": true,
    "createdAt": "2023-06-22T14:30:00.000Z",
    "updatedAt": "2023-06-22T14:30:00.000Z"
  },
  ...
]
```

## Error Handling
The API returns appropriate status codes for different scenarios:
- `400 Bad Request` – Invalid input
- `404 Not Found` – Category not found
- `500 Internal Server Error` – Server-side issue

## Testing with Postman
1. Open Postman.
2. Import the provided collection (if available) or create a new collection.
3. Create requests for each endpoint.
4. Test each endpoint with different request bodies.
5. Verify that responses match expected formats.

