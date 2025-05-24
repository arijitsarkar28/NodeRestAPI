# Node.js REST API

A RESTful API built with Node.js, Express, and MongoDB. Features include user authentication, post management, and image upload functionality.

## Features

- User Authentication (Signup/Login)
- JWT-based Authorization
- Post CRUD Operations
- Image Upload
- Pagination
- Real-time Updates using Socket.io
- Error Handling
- Input Validation

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- Socket.io
- Multer for file uploads
- Express Validator

## Getting Started

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/arijitsarkar28/NodeRestAPI.git
   cd NodeRestAPI
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up configuration:

   - Copy \`config.example.js\` to \`config.js\`
   - Update the MongoDB URI and JWT secret in \`config.js\`

4. Start the server:
   \`\`\`bash
   npm start
   \`\`\`

The server will start on port 8080.

## API Endpoints

### Authentication

- POST /auth/signup - Create a new user
- POST /auth/login - Login user
- GET /auth/status - Get user status
- PATCH /auth/status - Update user status

### Posts

- GET /feed/posts - Get all posts (paginated)
- POST /feed/post - Create a new post
- GET /feed/post/:postId - Get a specific post
- PUT /feed/post/:postId - Update a post
- DELETE /feed/post/:postId - Delete a post

## Development

This project uses ESLint and Prettier for code formatting. To format code:

\`\`\`bash
npm run format
npm run lint:fix
\`\`\`

## License

MIT
