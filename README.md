# 🚀 Zoom Cleaning Task

A production-ready **Next.js 15 application** showcasing authentication, role-based routing, internationalization, and a fully responsive landing page built from a Figma design.

This project demonstrates clean architecture, scalable structure, and modern frontend best practices.

---

## 🌐 Live Demo

- 🔗 Live URL: (https://zoom-task.vercel.app/en/admin)
- 🔗 GitHub Repository: https://github.com/mazenessam99/zoom-task  

---

## 📌 Overview

This application was built as a **Frontend Technical Assessment** with a strong focus on:

- Scalable architecture
- Clean and maintainable code
- Role-based access control
- Pixel-perfect UI implementation
- Responsive design across all devices
- Internationalization (i18n)

---

## ✨ Key Features

### 🔐 Authentication System
- Secure login functionality
- JWT-based authentication
- Persistent user session
- Form validation using Zod
- Loading & error states handling
- Logout functionality

---

### 🧭 Role-Based Routing

The system supports two user roles:

#### 👑 SUPER_ADMIN
Redirected to:

Dashboard includes:
- Full Name
- Email Address
- Phone Number
- User Type

---

#### 📢 MARKETER
Redirected to:


Access to a fully responsive landing page.

---

## 🌍 Internationalization (i18n)

Built using `next-intl`

Supported languages:
- 🇺🇸 English
- 🇪🇬 Arabic

Features:
- RTL / LTR support
- Dynamic language switching
- Fully localized UI content

---

## 🎨 Landing Page (Figma Implementation)

A pixel-perfect implementation based on the provided Figma design.

### Sections:
- Hero Section
- Services / Features Section
- Statistics Section

### Highlights:
- Fully responsive layout
- Reusable UI components
- Clean spacing & typography
- Modern design system approach

---

## 🔒 Route Protection & Middleware

- Protected routes using authentication guards
- Role-based access control
- Middleware-level protection
- Automatic redirection for unauthorized users

---

## 📁 Project Architecture

A clean and scalable folder structure:
src/
app/
[locale]/
admin/
login/

components/
ui/
shared/
admin/
landing/

hooks/
useRedux/

lib/
schemas/
helpers/

i18n/
messages/
ar.json
en.json
request.ts
routing.ts

store/

middleware/

types/

---

## 🧪 Form Handling & Validation

- React Hook Form for form state management
- Zod for schema validation
- Strong TypeScript integration

---

## 🔔 Notifications

- React Hot Toast for user feedback
- Success / error handling UX improvements

---

## 🧠 State Management

- Redux Toolkit for global state
- RTK Query for API handling (if applicable)
- Centralized and scalable store structure

---

## 🎯 Technical Highlights

- ⚡ Next.js 15 App Router
- 🟦 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 Reusable components architecture
- 🔐 Secure authentication flow
- 🌍 Multi-language support
- 📱 Fully responsive UI
- 🧼 Clean code principles
- 🏗️ Scalable folder structure

---


### 🔑 Login Page
![Login](public/readme/login.png)

---

### 🏠 Landing Page
![Landing](public/readme/landing.png)

---

### 📊 Admin Dashboard
![Admin](public/readme/admin.png)

---

## 🛠 Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript

### Styling
- Tailwind CSS
- Lucide Icons

### State Management
- Redux Toolkit
- RTK Query

### Forms & Validation
- React Hook Form
- Zod

### Internationalization
- next-intl

### Notifications
- React Hot Toast

### Authentication
- JWT
- Middleware Protection
- Role-Based Access Control

### Tools
- ESLint
- Prettier
- Git & GitHub

### Deployment
- Vercel

---

## 👨‍💻 Author

**Mazen Essam**

- GitHub: https://github.com/mazenessam99  
- LinkedIn: www.linkedin.com/in/mazen-essam-8b5448224  

---

## ⭐ Project Goals

This project was built to demonstrate:

- Real-world frontend architecture
- Scalable Next.js structure
- Clean and maintainable code
- Professional UI implementation
- Best practices in React ecosystem