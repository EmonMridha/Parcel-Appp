# 📦 SafeShip - Parcel Delivery Management System

SafeShip is a modern parcel delivery management platform that allows users to send, track, and manage parcels efficiently. The application supports role-based access for customers, delivery personnel, and administrators, providing a complete parcel delivery solution.

---

## 🌐 Live Website

https://safeship-5b311.web.app/

---

## Backend Live Link
https://safe-ship-server.vercel.app/

## 📖 Overview

SafeShip simplifies parcel delivery by providing an easy-to-use platform for customers to create delivery requests, track parcel status, and manage deliveries. Delivery personnel can accept and update parcel statuses, while administrators can oversee users, parcels, and delivery operations through a dedicated dashboard.

---

## ✨ Features

- User Authentication & Authorization
- Role-based Dashboard (Admin, Customer, Delivery Personnel)
- Create Parcel Delivery Requests
- Track Parcel Delivery Status
- Parcel Management (Create, Update, Delete)
- Delivery Personnel Assignment
- User Profile Management
- Search, Filter & Pagination
- Responsive Design
- Secure Protected Routes
- Toast Notifications
- Modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router DOM
- JavaScript
- Tailwind CSS
- DaisyUI
- Axios
- TanStack Query
- React Hook Form
- Firebase Authentication
- React Hot Toast
- SweetAlert2
- React Icons
- React Leaflet

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Deployment

- Vercel (Frontend)
- Vercel / Render (Backend)

### Development Tools

- Git
- GitHub
- ESLint
- npm

---

## 📦 Dependencies

### Main Dependencies

- react
- react-router-dom
- axios
- @tanstack/react-query
- react-hook-form
- firebase
- react-hot-toast
- sweetalert2
- react-icons
- react-leaflet
- leaflet
- tailwindcss
- daisyui

### Development Dependencies

- vite
- eslint

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/EmonMridha/Parcel-Appp
```

### 2. Navigate to the project folder

```bash
cd safeship-client
```

### 3. Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### 4. Create a `.env.local` file

```env
VITE_API_URL=your_backend_api_url

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Open your browser

```
http://localhost:5173
```

---

## 📂 Project Structure

```
src/
│
├── assets/
├── components/
├── layouts/
├── pages/
├── routes/
├── hooks/
├── providers/
├── services/
├── utils/
└── main.jsx
```

---

## 👥 User Roles

### Customer

- Register/Login
- Book Parcel Delivery
- Track Parcels
- Manage Profile
- View Delivery History

### Delivery Personnel

- View Assigned Parcels
- Update Delivery Status
- Complete Deliveries

### Admin

- Manage Users
- Manage Parcels
- Assign Delivery Personnel
- View Dashboard Analytics

---

## 🔐 Environment Variables

| Variable | Description |
| -------- | ----------- |
| VITE_API_URL | Backend API URL |
| VITE_FIREBASE_API_KEY | Firebase API Key |
| VITE_FIREBASE_AUTH_DOMAIN | Firebase Auth Domain |
| VITE_FIREBASE_PROJECT_ID | Firebase Project ID |
| VITE_FIREBASE_STORAGE_BUCKET | Firebase Storage Bucket |
| VITE_FIREBASE_MESSAGING_SENDER_ID | Firebase Messaging Sender ID |
| VITE_FIREBASE_APP_ID | Firebase App ID |

---
