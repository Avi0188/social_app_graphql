# social_app_graphql

Welcome to the Social App GraphQL API! This API provides endpoints for managing users, quotes, and user authentication.

## API Endpoint

You can interact with the GraphQL API using the following endpoint:

- **GraphQL Endpoint**: [https://social-app-graphql.onrender.com/graphql](https://social-app-graphql.onrender.com/graphql)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Apollo Server
- GraphQL

## Getting Started

To get started with using the API locally or integrate it into your project, follow the steps below:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Define the following variables in the `.env` file:

     ```plaintext
     MONGO_URL=<your-mongodb-connection-url>
     SECRET=<your-jwt-secret>
     ```

4. Start the server:

   ```bash
   npm start
   ```

## Features

### User Management

- **Sign Up**: Users can sign up for a new account with their first name, last name, email, and password.
- **Sign In**: Existing users can sign in with their email and password.
- **Profile**: Users can view their profile information, including their quotes, followers, and users they are following.

### Quote Management

- **Create Quote**: Users can create new quotes.
- **View Quotes**: Users can view all quotes or quotes created by a specific user.

### Authentication

- **JSON Web Tokens (JWT)**: User authentication is handled using JWT. Users receive a JWT token upon successful sign-in, which they can use to access protected endpoints by including it in the request headers.

## Documentation

For detailed documentation about the API schema, queries, mutations, and authentication, please refer to the [API Documentation](API_DOCUMENTATION.md).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

# Social App GraphQL API Documentation

## Schema

### User

- `_id: ID!`: The unique identifier of the user.
- `firstName: String!`: The first name of the user.
- `lastName: String!`: The last name of the user.
- `email: String!`: The email address of the user.
- `password: String!`: The password of the user.
- `quotes: [Quote]`: The quotes created by the user.
- `followers: [User]`: The followers of the user.
- `following: [User]`: The users followed by the user.

### Quote

- `name: String!`: The content of the quote.
- `by: ID!`: The ID of the user who created the quote.

## Queries and Mutations

### Queries

- `users`: Get a list of all users.
- `user(_id: ID!)`: Get a user by ID.
- `quotes`: Get a list of all quotes.
- `iquote(by: ID!)`: Get quotes created by a specific user.

### Mutations

- `signupUser(userNew: UserInput!)`: Sign up a new user.
- `signinUser(userSignin: UserSigninInput!)`: Sign in an existing user.
- `createQuote(name: String!)`: Create a new quote.

## Authentication

- User authentication is handled using JSON Web Tokens (JWT).
- Users can sign up, sign in, and access protected endpoints by providing a valid JWT token in the request headers.

## Error Handling

- The server handles various errors, such as validation errors, authentication errors, and server errors.
- Detailed error messages are provided in the response for easier debugging.

