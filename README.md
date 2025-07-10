# Release Fast

A modern web application for managing and automating software releases with a beautiful, responsive interface and dark/light theme support.

## 📋 Project Description

Release Fast is a comprehensive platform designed to streamline the software release process. Built with Next.js 15 and TypeScript, it provides an intuitive dashboard for managing projects, tracking releases, and automating deployment workflows. The application features a modern UI with full dark/light theme support, responsive design, and a clean architecture.

### ✨ Key Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme toggle
- **Project Management**: Create and manage multiple projects
- **Release Tracking**: Monitor and track software releases
- **User Authentication**: Secure user authentication system
- **Dashboard**: Comprehensive dashboard with project overview
- **Theme System**: Automatic theme detection with manual toggle
- **Responsive Design**: Works seamlessly on desktop and mobile devices

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
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and configure the required environment variables (see Environment Variables section below).

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
   # or
   pnpm dev
   # or
   bun dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Environment Variables

This project requires several environment variables to function properly. Create a `.env` file in the root directory with the following variables:

### Required Variables

```env
NEXT_PUBLIC_APP_URL=

DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_SCHEMA=
DATABASE_URL=postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?schema=${DATABASE_SCHEMA}

AUTH_SECRET=

AUTH_GITHUB_CLIENT_ID=
AUTH_GITHUB_CLIENT_SECRET=

AUTH_GITLAB_CLIENT_ID=
AUTH_GITLAB_CLIENT_SECRET=

OPENAI_API_KEY=
```

### Setting Up Authentication Providers

#### Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env` file

#### GitHub OAuth

1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set the Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env` file

#### GitLab OAuth

1. Go to [GitLab Settings > Applications](https://gitlab.com/-/profile/applications)
2. Click "New application"
3. Set the Redirect URI to: `http://localhost:3000/api/auth/callback/gitlab`
4. Copy the Application ID and Secret to your `.env` file

### Database Configuration

The `DATABASE_URL` follows this format:

```
postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME?schema=SCHEMA_NAME
```

For local development with Docker:

- **Username**: `postgres`
- **Password**: `postgres`
- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `release_fast`
- **Schema**: `public`

### Production Environment

For production deployment, make sure to:

1. **Use a production database** (e.g., PostgreSQL on AWS RDS, Google Cloud SQL, or similar)
2. **Update redirect URIs** in your OAuth provider settings to use your production domain
3. **Set secure environment variables** in your hosting platform
4. **Use HTTPS** for all authentication callbacks

### Security Notes

- **Never commit your `.env` file** to version control
- **Use strong, unique secrets** for each OAuth provider
- **Rotate secrets regularly** in production
- **Use environment-specific configurations** for different deployment stages

## 📦 Dependencies

### Core Dependencies

- **Next.js 15.3.3** - React framework for production
- **React 19.0.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components

- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-select` - Select component
  - `@radix-ui/react-switch` - Switch component
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility for merging Tailwind classes

### Development Tools

- **Next.js Top Loader** - Progress bar for page transitions
- **Tw Animate CSS** - Tailwind CSS animations
- **TypeScript** - Type definitions for Node.js, React, and React DOM

## 🛠️ Project Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **State Management**: React Context API
- **Font**: Source Sans 3 (Google Fonts)

### Architecture

- **File Structure**: App Router with route groups
- **Component Organization**: Modular component architecture
- **Theme System**: CSS variables with React context
- **Routing**: Next.js file-based routing
- **Type Safety**: Full TypeScript implementation

### Development

- **Package Manager**: npm/yarn/pnpm/bun
- **Linting**: Next.js ESLint configuration
- **Build Tool**: Next.js built-in bundler
- **Development Server**: Next.js dev server

## 📁 Project Structure

```
release-fast/
├── src/
│   ├── app/
│   │   ├── (pages)/           # Route groups
│   │   │   ├── (home)/        # Home page routes
│   │   │   ├── auth/          # Authentication routes
│   │   │   └── dash/          # Dashboard routes
│   │   ├── components/        # Reusable components
│   │   │   ├── common/        # Common components
│   │   │   └── ui/            # UI primitives
│   │   ├── contexts/          # React contexts
│   │   ├── constants/         # Application constants
│   │   ├── helpers/           # Utility functions
│   │   └── css/              # Global styles
│   ├── configs/              # Configuration files
│   ├── domain/               # Domain logic
│   └── infra/                # Infrastructure code
├── public/                   # Static assets
└── package.json
```

## 🎨 Theme System

The application includes a comprehensive theme system with:

- **Automatic Detection**: Detects user's system theme preference
- **Manual Toggle**: User can manually switch between light and dark themes
- **Persistence**: Theme preference is saved to localStorage
- **Theme-Aware Components**: Logos and UI elements adapt to the current theme
- **CSS Variables**: Consistent theming using CSS custom properties

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 👨‍💻 Creator

**Nevio** - Full Stack Developer

This project was created with ❤️ using modern web technologies and best practices.

---

## 📄 License

This project is private and proprietary. All rights reserved.
