# Word Game Backend

This repository contains the backend server code for the Thai Game, a language learning application that provides Thai word data and handles API requests from the frontend UI. The backend is built using Node.js and Express, and it interacts with a SQLite database to store and retrieve word information.

## Features

- Exposes API endpoints to retrieve Thai word data for the game.
- Supports fetching random words from selected categories.
- Implements CRUD operations for managing word data.
- Handles authentication and authorization for secure API access.
- Utilizes a SQLite database to store and query word information.
- Provides error handling and validation for robust API interactions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/thai-game-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd thai-game-backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

   - Run the database migration to create the necessary tables:

     ```bash
     npx knex migrate:latest
     ```

   - (Optional) Run the database seed to populate sample word data:

     ```bash
     npx knex seed:run
     ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   This will start the backend server and connect it to the configured database. The server will run on `http://localhost:3001` by default.

2. Access the API endpoints:

   - Use a tool like Postman or cURL to make API requests to the available endpoints.
   - Refer to the API documentation for details on the available routes and request/response formats.

## API Documentation

The API documentation provides detailed information about the available endpoints, request formats, and response formats. It is essential to review the documentation to understand how to interact with the backend server effectively.

You can find the API documentation at API-DOC

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. For major changes, please discuss them with the repository owners first to ensure they align with the project's goals.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

The Thai Game Backend was developed as part of a collaborative effort. We would like to acknowledge and thank the contributors who have dedicated their time and expertise to make this project possible.

## Contact

If you have any questions or need further assistance, please feel free to contact us at [email protected]

