# A-Safe Digital Technical Test: Node.js Developer with TypeScript, Fastify, Prisma, and Monorepo

## Author

**Maxi Álvarez Marchesi**
[maxialvarezmarchesi@gmail.com](mailto:maxialvarezmarchesi@gmail.com)

## Completed Tasks

- **Task 1:** Advanced Monorepo Setup
- **Task 2:** Advanced Server Setup
- **Task 3:** Advanced Database Integration with Prisma and PostgreSQL (pending \"Relationships and Data Validation\")
- **Task 4:** Authentication and Authorization
- **Task 6:** Testing and Documentation
- **Task 7:** Monorepo and Separate Packages

## Pending

- **Task 5:** Advanced API Features

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/maxialvarezmarchesi/asafe.git
cd asafe
```

### 2. Prerequisites

- Node.js (version 20)
- Yarn
- PostgreSQL

### 3. Install Yarn globally

```bash
npm install --global yarn
```

### 4. Configure environment variables

Copy the `.env.example` file to `.env` and configure the necessary variables.

**Example configuration:**

```env
PORT=3000
LOG_ENABLE=false
DB_PASSWORD='123'
DATABASE_URL='postgresql://postgres:${DB_PASSWORD}@localhost:5432/DB'
JWT_SECRET='abc.'
JWT_ALGO='RS256'
ADMIN_EMAIL='admin@test.com'
ADMIN_PASSWORD='qwert'
```

### 5. Install dependencies and compile the code

```bash
yarn install
yarn boot
```

### 6. Optional Docker Setup

An optional `docker-compose.yaml` file compatible with `.env` is included to set up a PostgreSQL server in Docker.

## Start the Service

### 1. Start the service

```bash
yarn start
```

### 2. Testing

API and application tests are included and can be run with the following command:

```bash
yarn test
```

## API Documentation

The API's Swagger documentation is available at:

```
http://localhost:PORT/doc
```

Make sure to replace `PORT` with the port configured in the `.env` file.

## Postman

A Postman collection file `Asafe-REST_API_basics.postman_collection.json` is included in the repository to interaction with the API.

The admin password is configured in the `.env` file.

## Endpoint Access

### Public Endpoints

The following endpoints are publicly accessible:

- **Login User** (`/login`): User authentication.
- **Login Admin** (`/admin/login`): Admin authentication.
- **Healthcheck** (`/healtcheck`): Server status.

### Protected Endpoints

Protected endpoints require a JWT token to be sent in the request header. The header should be formatted as follows:

```http
Authorization: Bearer: JWT
```

**Note:** It is important to include the text `\"Bearer: \"` at the beginning of the header value.

### Obtaining a JWT Token

To obtain a JWT token, use the following endpoints:

- **User Token:**
  Endpoint `Login User` (`/login`) with the user's login credentials (email and password).
- **Admin Token:**
  Endpoint `Login Admin` (`/admin/login`) with the admin's login credentials configured in `.env` (email and password).

### Specific Protected Endpoints

- **User Endpoints:**
  Require an admin token and allow basic CRUD operations on users.
- **My Account Endpoints:**
  Require a user token and allow viewing and updating personal profile information.

## Project Architecture

The project uses a monorepo with Yarn workspace, containing the following packages located in `packages/`:

### config

- Provides a service to return the application configuration by reading the `.env` file.
- Ensures that different parts of the system are agnostic about how to obtain configuration data.

### utils

- Contains utilities, such as logic for hashing passwords and storing them encrypted.

### infra

- Manages the PostgreSQL database and user schema.
- Exports the `DB` object that handles the database connection.
- Dependencies:
  - `@malvarez/asafe-config`

### app

- Contains the business logic.
- Uses a repository pattern to persist information in PostgreSQL or memory.
- Performs validations and restrictions on user data to be persisted.
- Uses a `user` DTO for internal communication.
- Dependencies:
  - `@malvarez/asafe-config`
  - `@malvarez/asafe-infra`
  - `@maxialvarez/asafe-utils`

### api

- Contains the logic for API access and interaction with the application.
- Defines the logic for encoding and decoding JWT authorization tokens.
- Dependencies:
  - `@malvarez/asafe-config`
  - `@malvarez/asafe-app`

### server

- Manages the HTTP server framework (Fastify).
- Defines server routes and how each route consumes the API services.
- Processes the token received via header using the API services.
- Contains the Swagger documentation of the HTTP API.
- Dependencies:
  - `@malvarez/asafe-config`
  - `@malvarez/asafe-api`
