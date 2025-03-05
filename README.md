# Category Management API

A RESTful API for managing categories built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/category_db
   ```

3. Make sure MongoDB is running on your local machine.

4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/categories | Create a new category |
| GET | /api/categories | Get all categories |
| GET | /api/categories/:id | Get a category by ID |
| PUT | /api/categories/:id | Update a category |
| DELETE | /api/categories/:id | Delete a category |

## Request & Response Examples

### Create Category

**Request:**
```
POST /api/categories
Content-Type: application/json

{
  "name": "Electronics",
  "description": "Electronic devices and gadgets"
}
```

**Response:**
```
Status: 201 Created
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "Electronics",
  "description": "Electronic devices and gadgets",
  "isActive": true
}
```

### Get All Categories

**Request:**
```
GET /api/categories
```

**Response:**
```
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

## Testing with Postman

1. Open Postman
2. Import the provided collection (if available) or create a new collection
3. Create requests for each endpoint
4. Test each endpoint with appropriate request bodies
5. Verify responses match expected formats 