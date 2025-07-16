# 🚀 Online Code Compiler (MERN Stack + Docker)

An online collaborative code compiler with real-time code sharing, authentication, and Docker-based secure code execution.

---

## 📋 Table of Contents

- [Project Features](#project-features)
- [Tech Stack](#tech-stack)
- [Installation Guide](#installation-guide)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Run Project](#run-project)
- [Folder Structure](#folder-structure)

---

## 🛠 Project Features

- Realtime collaborative code editing (using Socket.io)
- Run C++, Python, and Java securely using Docker containers
- JWT-based Authentication (Login & Register)
- MongoDB for code sharing and user storage
- Protected Routes & Session Management
- MUI-based modern responsive UI
- Shareable code links
- Automatic file watching using nodemon

---

## 💻 Tech Stack

- **Frontend:** React + Vite + MUI + Socket.io-client + Axios
- **Backend:** Node.js + Express.js + MongoDB + Docker + Socket.io
- **Authentication:** JWT + bcrypt
- **UI Styling:** Material-UI (MUI)
- **Code Execution:** Docker containers (isolated)

---

## 📦 Installation Guide

### 1️⃣ Prerequisites

- Install **Node.js**\
  [https://nodejs.org/](https://nodejs.org/)
- Install **Docker**\
  [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- Create a free **MongoDB Atlas account**\
  [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

---

## ⚙️ Backend Setup

```bash
# Navigate to backend folder
cd server

# Initialize Node project
npm init -y

# Install dependencies
npm install express mongoose cors body-parser bcryptjs jsonwebtoken dotenv socket.io

# Install nodemon (for development)
npm install --save-dev nodemon

# Create necessary folders/files:
# - index.js (your main backend file)
# - Dockerfile (your docker setup)
# - run.sh (code execution script)
# - models/, routes/, utils/ folders

# Setup .env (Important)
touch .env
```

**.env File Example:**

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=yourVeryStrongSecretKey
```

**Optional:** Add dev script in `server/package.json`

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

To run backend:

```bash
npm run dev
```

---

## 🎨 Frontend Setup

```bash
# Navigate to client folder
cd ../client

# Create Vite app
npm create vite@latest

# Install dependencies
npm install axios socket.io-client react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material framer-motion

# Start development server
npm run dev
```

---

## ▶️ Run Project

- Start Docker Desktop.
- Run backend:

```bash
cd server
npm run dev
```

- Run frontend:

```bash
cd client
npm run dev
```

- Open in browser:

```
http://localhost:5173/
```

---

## 📁 Folder Structure (Example)

```
your-project/
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── sockets/
│   │   └── context/
│   └── package.json
├── server/            # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── Dockerfile
│   ├── run.sh
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## 📜 License

This project is for educational/demo purposes.

