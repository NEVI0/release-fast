# Release Fast

A modern web application for managing and automating software releases with a beautiful, responsive interface and dark/light theme support.

## 📋 Project Description

Release Fast is a comprehensive platform designed to streamline the software release process. Built with Next.js 15 and TypeScript, it provides an intuitive dashboard for managing projects, tracking releases, and automating deployment workflows. The application features a modern UI with full dark/light theme support, responsive design, and a clean architecture.

## 🚀 How to Run

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun package manager
- Docker and Docker Compose (for database)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/NEVI0/release-fast.git
cd release-fast
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and configure the required environment variables (follow the Environment Variables in the `.env.example`).

4. **Start the database**

```bash
npm run docker:up
```

5. **Generate Prisma client**

```bash
npm run db:generate
```

6. **Push database schema**

```bash
npm run db:push
```

7. **Run the development server**

```bash
npm run dev
# or
yarn dev
```
