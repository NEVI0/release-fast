# Release Fast

A modern web application for managing and automating software releases with a beautiful, responsive interface and dark/light theme support. Access it by the following link: [https://releasefast.io](https://releasefast.io)

Available in English and Portuguese.

## 🔖 Project Description

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

4. **Start the docker container**

```bash
npm run docker:up
```

For more database details go to [DATABASE_SETUP.md](./DATABASE_SETUP.md) file.

5. **Generate Prisma client**

```bash
npm run db:generate
```

6. **Push database schema do docker**

```bash
npm run db:push
```

7. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

### Running Tests

This project uses Jest and React Testing Library for unit and integration testing. Follow these steps to run the test suite:

#### Prerequisites for Testing

Make sure you have completed the installation steps above and have the development environment set up.

#### Available Test Commands

1. **Run all tests**

```bash
npm run test:coverage
# or
yarn test:coverage
```

2. **Run tests in watch mode (recommended for development)**

```bash
npm run test
# or
yarn test
```

#### Test Structure

- **Unit Tests**: Located in `__tests__` directories or files with `.test.ts` extension

Make sure all tests pass before submitting a pull request.

## 📃 License

This project is licensed under a Proprietary License.  
See the [LICENSE](./LICENSE) file for details.
