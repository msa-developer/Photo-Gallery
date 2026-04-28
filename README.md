# Photo Gallery Project Documentation

## 1. Project Overview

The **Photo Gallery** is a modern, responsive full-stack MERN application designed for personal photo management. It allows users to upload, view, and delete images in a beautiful, masonry-style gallery interface. The project focuses on **simplicity**, **speed**, and a **clean user experience**.

---

## 2. Technologies Used

### Frontend

| Technology          | Version | Purpose                                                     |
| ------------------- | ------- | ----------------------------------------------------------- |
| **React**           | v19     | Modern UI library for building components                   |
| **Vite**            | —       | Lightning-fast build tool and development server            |
| **Tailwind CSS**    | v4      | Utility-first CSS framework for rapid styling               |
| **DaisyUI**         | v5      | Component library for Tailwind CSS providing modern themes  |
| **Zustand**         | —       | Lightweight state management for handling application state |
| **Axios**           | —       | Promise-based HTTP client for making API requests           |
| **React Hot Toast** | —       | Elegant notifications for success and error feedback        |

### Backend

| Technology            | Purpose                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **Node.js & Express** | Robust server-side runtime and web framework                            |
| **MongoDB**           | NoSQL database for storing image data                                   |
| **Mongoose**          | ODM for MongoDB to handle data modeling                                 |
| **Multer**            | Middleware for handling multipart/form-data (image uploads)             |
| **CORS**              | Cross-Origin Resource Sharing for secure frontend-backend communication |
| **Dotenv**            | Environment variable management                                         |

---

## 3. Core Functionalities

### Image Upload

Users can select images from their local device. Images are processed as `multipart/form-data` and stored directly in MongoDB as **Base64 strings**.

### Dynamic Gallery View

A responsive masonry grid that automatically adjusts based on screen size (Mobile, Tablet, Desktop). It features a **"Garden" theme** with smooth hover effects.

### Real-time Image Counter

The navigation bar displays a live count of the total photos in the gallery.

### Image Deletion

Users can remove images with a single click. The UI updates instantly to reflect the change without requiring a page reload.

### Feedback System

Real-time toast notifications confirm when an image is successfully uploaded or deleted, and provide alerts in case of errors.

### Backdrop Blur Navigation

A sticky, modern navigation bar with glassmorphism effects.

---

## 4. Advantages

- **High Performance** — Built with Vite and Zustand, ensuring a very fast and snappy user experience.
- **Mobile Responsive** — Fully optimized for all devices using Tailwind's responsive utilities.
- **Zero Setup Storage** — Uses Base64 encoding to store images directly in the database, eliminating the need for external storage services (like AWS S3) for simple use cases.
- **Modern UI/UX** — Utilizes professional-grade design patterns, including masonry layouts and interactive feedback.
- **Clean Architecture** — Organized folder structure separating concerns between controllers, routes, models, and frontend components.

---

## 5. Disadvantages

- **Database Size** — Storing images as Base64 strings in MongoDB can lead to large database sizes and performance issues if handling very high-resolution files or a massive number of images.
- **No Authentication** — The current version does not include user login, meaning anyone can upload or delete photos.
- **No Pagination** — All images are loaded at once, which could slow down the application as the gallery grows significantly.

---

## 6. How to Run the Project

### Backend

```bash
# 1. Navigate to the /backend folder
cd backend

# 2. Install dependencies
npm install

# 3. Configure .env with PORT and MONGO_URI
# Example .env:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/photo-gallery

# 4. Start the server
#do this in main folder
npm run build
npm run start
```
