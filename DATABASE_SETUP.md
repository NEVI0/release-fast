# Database Setup Guide

This project uses Prisma with PostgreSQL and Docker for database management.

## Prerequisites

- Docker and Docker Compose installed
- Node.js and npm

## Quick Start

1. **Start the PostgreSQL database:**

```bash
npm run docker:up
```

2. **Generate Prisma client:**

```bash
npm run db:generate
```

3. **Push the schema to the database:**

```bash
npm run db:push
```

4. **Start the development server:**

```bash
npm run dev
```

## Database Management Commands

- `npm run docker:up` - Start PostgreSQL container
- `npm run docker:down` - Stop PostgreSQL container
- `npm run docker:logs` - View container logs
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and apply migrations
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:reset` - Reset database and apply migrations

## Environment Variables

Make sure your `.env` file contains:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/release_fast?schema=public
```

## Prisma Studio

To view and edit your database through a GUI:

```bash
npm run db:studio
```

This will open Prisma Studio at `http://localhost:5555`

## Troubleshooting

1. **Database connection issues**: Make sure Docker is running and the container is up
2. **Schema changes**: Run `npm run db:push` after modifying the schema
3. **Reset database**: Use `npm run db:reset` to start fresh
