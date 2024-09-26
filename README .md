# <img src="./web/public/icon.png" alt="In.Orbit Logo" width="20" > Welcome to In.Orbit

**in.orbit** is a web application designed to help users set and track weekly goals. The app allows users to:

- Register weekly goals.
- Track current progress.
- View the total number of completed and pending goals.
- See a detailed view of completed goals, including the date and time they were achieved.

The application provides a clear perspective on your productivity, making it easier to stay on top of your weekly objectives.

<p align="center">
   <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tech">Tech Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Setup">Setup Instructions</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Validations">Validations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Project

<p align="center">
  <img alt="inorbit screenshot" src=".github/preview1.png" width="100%">
</p>
<p align="center">
  <img alt="inorbit screenshot" src=".github/preview2.png" width="100%">
</p>
<p align="center">
  <img alt="inorbit screenshot" src=".github/preview3.png" width="100%">
</p>

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
- **PostgreSQL**: Relational database for storing user data.
- **Drizzle ORM**: SQL ORM for managing database operations.

Backend code can be found in the [server](./server) folder.

## Setup Instructions

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **Docker**: Ensure you have [Docker](https://www.docker.com/) installed for backend setup.

### Backend (Server)

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a **.env** file in the root of the **server** folder and add the following environment variables:

   ```bash
   DATABASE_URL=postgresql://your-desired-pg-username:your-desired-pg-password@localhost:5432/your-desired-pg-db-name
   POSTGRES_USER="your-desired-pg-username"
   POSTGRES_PASSWORD="your-desired-pg-password"
   POSTGRES_DB="your-desired-pg-db-name"
   ```

4. Open your Docker app and start the database with the following command:

   ```bash
   docker-compose up
   ```

5. Generate the database migrations:
   ```bash
   npx drizzle-kit generate
   ```
6. Apply the migrations:
   ```bash
   npx drizzle-kit migrate
   ```
7. Run the seed script to populate the database with sample data:
   ```bash
   npm run seed
   ```
8. Run the drizzle orm studio to view the database schema and data:

   ```bash
   npx drizzle-kit studio
   ```

9. Start the backend server:

   ```bash
   npm run dev
   ```

### Frontend (Web)

1. Navigate to the `web` folder:
   ```bash
   cd web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a **.env** file in the root of the **web** folder and add the following environment variables (backend URL):
   ```bash
   VITE_API="http://localhost:3333/"
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Validations

Both the frontend and backend make use of [Zod](https://zod.dev/?id=introduction) for runtime data validation to ensure data integrity across the app.
