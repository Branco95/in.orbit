
# Welcome to In.Orbit

![In.Orbit Logo](./web/public/icon.png)

**in.orbit** is a web application designed to help users set and track weekly goals. The app allows users to:

- Register weekly goals.
- Track current progress.
- View the total number of completed and pending goals.
- See a detailed view of completed goals, including the date and time they were achieved.

The application provides a clear perspective on your productivity, making it easier to stay on top of your weekly objectives.

## Features

- **Goal Registration**: Add weekly goals.
- **Progress Tracking**: View how many goals have been completed versus how many are left.
- **Completion Details**: See when (date and time) each goal was completed.
- **Responsive UI**: Built with Tailwind CSS for a clean and responsive design.

## Tech Stack

### Frontend (Web)

- **Vite**: Lightning-fast build tool.
- **React**: Component-based UI framework.
- **TypeScript**: Static typing to enhance code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.

Frontend code can be found in the [web](./web) folder.

### Backend (Server)

- **Node.js**: JavaScript runtime for building fast, scalable server-side applications.
- **TypeScript**: For type safety and better code organization.
- **Fastify**: Fast and low-overhead web framework for Node.js.
- **Docker**: Containerization for easier development and deployment.
- **Drizzle ORM**: SQL ORM for managing database operations.
- **Zod**: Schema declaration and validation library to ensure data integrity.

Backend code can be found in the [server](./server) folder.

## Setup Instructions

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **Docker**: Ensure you have [Docker](https://www.docker.com/) installed for backend setup.

### Frontend (Web)

1. Navigate to the `web` folder:
   ```bash
   cd web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend (Server)

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the Docker environment and start the backend:
   ```bash
   docker-compose up
   ```

## Validation

Both the frontend and backend make use of **Zod** for runtime data validation to ensure data integrity across the app.

## License

This project is licensed under the MIT License.
