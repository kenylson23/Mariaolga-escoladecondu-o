# Escola de Condução Maria Olga

## Overview

A comprehensive website for an Angolan driving school (Escola de Condução Maria Olga) built as a modern single-page application. The website showcases the school's 20+ years of experience, course offerings across multiple vehicle categories (B, A, C), and provides interactive features like a course price calculator. The application emphasizes trust, professionalism, and user-friendly navigation to attract potential students and facilitate course enrollment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast development experience
- **Wouter** for lightweight client-side routing instead of React Router
- **Single Page Application (SPA)** structure with section-based navigation
- **Responsive design** using mobile-first approach with Tailwind CSS

### UI Framework & Styling
- **Tailwind CSS** for utility-first styling with custom design system
- **Shadcn/ui** component library providing pre-built, accessible components
- **Radix UI** primitives for complex interactive components (dialogs, dropdowns, etc.)
- **Custom color palette** with purple primary (#7C3AED), orange accent (#F59E0B), and neutral tones
- **CSS custom properties** for theme management and consistent design tokens

### Component Architecture
- **Modular component structure** with separate sections (Header, Hero, About, Courses, Calculator, Gallery, Contact, Footer)
- **Reusable UI components** from Shadcn/ui library for consistency
- **Component composition pattern** using React composition over inheritance
- **Form handling** with React Hook Form and Zod validation

### State Management & Data Fetching
- **TanStack Query (React Query)** for server state management and caching
- **Local component state** using React hooks for UI interactions
- **Form state** managed through React Hook Form for contact forms and calculator

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **RESTful API design** with `/api` prefix for all backend routes
- **Memory storage** implementation with interface for easy database migration
- **Middleware-based architecture** for request processing and error handling

### Database & ORM
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Database schema** defined in shared directory for type consistency
- **Migration system** using Drizzle Kit for schema management
- **Neon Database** integration ready for serverless PostgreSQL

### Development & Build System
- **Monorepo structure** with shared types and utilities
- **TypeScript** throughout the entire stack for type safety
- **ESNext modules** with modern JavaScript features
- **Hot Module Replacement (HMR)** for fast development iteration
- **Path aliases** for clean imports (@/, @shared/, @assets/)

### Asset Management
- **Static asset serving** through Vite in development and Express in production
- **Generated placeholder images** for demonstration purposes
- **Font integration** with Google Fonts (Inter, Poppins, DM Sans)

## External Dependencies

### UI & Styling Libraries
- **@radix-ui/react-*** - Comprehensive collection of unstyled, accessible UI primitives
- **tailwindcss** - Utility-first CSS framework for rapid styling
- **class-variance-authority** - For creating consistent component variants
- **lucide-react** - Icon library for consistent iconography

### Form & Validation
- **react-hook-form** - Performant form library with minimal re-renders
- **@hookform/resolvers** - Validation resolver for React Hook Form
- **zod** - TypeScript-first schema validation
- **drizzle-zod** - Integration between Drizzle ORM and Zod validation

### Data Fetching & State
- **@tanstack/react-query** - Powerful data synchronization for React
- **wouter** - Lightweight routing library alternative to React Router

### Backend Dependencies
- **express** - Web application framework for Node.js
- **drizzle-orm** - TypeScript ORM with SQL-like syntax
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **connect-pg-simple** - PostgreSQL session store for Express sessions

### Development Tools
- **vite** - Fast build tool and development server
- **typescript** - Static type checking for JavaScript
- **esbuild** - Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

### Utilities
- **date-fns** - Modern JavaScript date utility library
- **clsx** - Utility for constructing className strings conditionally
- **nanoid** - URL-safe unique string ID generator

The architecture is designed for scalability and maintainability, with clear separation between client and server code, type safety throughout the stack, and modern development practices. The system can easily be extended with additional features like user authentication, payment processing, or advanced course management functionality.