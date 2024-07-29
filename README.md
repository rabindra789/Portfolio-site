
# Portfolio App

A personal portfolio application built with Node.js and Express.js. This app showcases your projects, skills, and achievements, with features such as user authentication and markdown support.

## Features

- User authentication with JSON Web Tokens (JWT)
- Showcase projects and achievements
- Markdown support for project descriptions
- Contact form with email notifications
- Responsive design using EJS templates

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd project-3
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   PORT=<your-port>
   MONGODB_URI=<your-mongodb-uri>
   EMAIL_USER=<your-email-address>
   EMAIL_PASS=<your-email-password>
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:<your-port>`.

## Dependencies

- `axios`: Promise-based HTTP client
- `bcrypt`: Password hashing library
- `body-parser`: Middleware for parsing request bodies
- `connect-mongo`: MongoDB session store for Express
- `cookie-parser`: Cookie parsing middleware
- `dotenv`: Loads environment variables from a `.env` file
- `ejs`: Embedded JavaScript templating engine
- `express`: Web framework for Node.js
- `express-ejs-layouts`: EJS layout support for Express
- `express-session`: Session management for Express
- `jsonwebtoken`: JSON Web Token implementation
- `markdown-it`: Markdown parser
- `method-override`: Allows HTTP methods like PUT and DELETE
- `mongoose`: MongoDB object modeling tool
- `nodemailer`: Email sending library

## Contributing

Feel free to open issues or submit pull requests to contribute to the project. Please ensure your contributions adhere to the project's coding style and standards.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

[Rabindra Kumar Meher] - [rabindrameher116@gmail.com]

