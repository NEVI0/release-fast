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

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

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
