# My Nest.js and Angular Application

This project is a full-stack application built with Nest.js for the backend and Angular for the frontend. It includes features for user authentication, admin access, account management, product searching, viewing individual items, and purchasing items.

## Backend

The backend is built using Nest.js and provides RESTful APIs for the frontend to interact with. The main modules include:

- **Auth Module**: Handles user authentication (sign in, sign out).
- **Admin Module**: Manages admin functionalities.
- **Account Module**: Manages user account settings and updates.
- **Product Module**: Handles product-related operations such as searching and retrieving product details.
- **Purchase Module**: Manages the purchase process.

### Getting Started

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm run start
   ```

## Frontend

The frontend is built using Angular and provides a user-friendly interface for interacting with the backend services. Key components include:

- **Sign In Component**: Allows users to sign in.
- **Admin Component**: Provides admin functionalities.
- **Account Component**: Manages user account settings.
- **Product Search Component**: Enables users to search for products.
- **Product View Component**: Displays individual product details.
- **Purchase Component**: Manages the purchase process.

### Getting Started

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Angular application:
   ```
   ng serve
   ```

## License

This project is licensed under the MIT License.