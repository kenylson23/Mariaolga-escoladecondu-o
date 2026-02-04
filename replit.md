# Escola de Condução KL

## Overview

A comprehensive website for an Angolan driving school (Escola de Condução KL) built as a modern single-page application. The website showcases the school's 12+ years of experience (founded in 2013), course offerings across multiple vehicle categories (Ligeiro Amador, Ligeiro Profissional, Pesado Profissional), and provides interactive features like a course price calculator. The application has been converted to a completely static architecture using JSON data files as the data source, making it deployment-ready without any backend dependencies. The site emphasizes trust, professionalism, and user-friendly navigation to attract potential students and facilitate course enrollment.

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

### State Management & Data Architecture
- **Static JSON data files** located in `client/src/data/` directory containing all application data
- **Local component state** using React hooks for UI interactions and calculator logic
- **Form state** managed through React Hook Form for contact forms and calculator
- **Contact form** uses mailto links for static email submission
- **No external dependencies** for data fetching - completely self-contained

### Static Architecture
- **Pure frontend application** with no backend dependencies
- **JSON data files** serve as the single source of truth for all content
  - `courses.json` - Course information, pricing, and features
  - `quiz.json` - Traffic code quiz questions and answers
  - `contact.json` - Contact information and course options
  - `site.json` - General site data, navigation, and company information
- **Component-based architecture** importing data directly from JSON files

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

### Static Data & Navigation
- **JSON imports** - Direct static data imports in components
- **wouter** - Lightweight routing library (removed for single-page design)

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

The architecture is designed for scalability and maintainability as a completely static site, with type safety throughout the frontend, modern development practices, and zero runtime dependencies. The system uses JSON data files as the single source of truth, making it easy to update content without code changes. The static nature makes it ideal for deployment to CDNs and ensures fast loading times. The system can be easily extended by adding new JSON data files or converting back to a dynamic architecture if needed.