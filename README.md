# 💧 Water Leakage Reporting System

A full-stack web application that helps users report water leakage issues with location details, descriptions, and images. The system stores submitted complaints in MongoDB for tracking and management.

## 🚀 Features

- **Report Water Leakage:** Submit complaints with user details and a description.
- **Location Selection:** Select the leakage location using a map.
- **Image Upload:** Attach images to support a complaint.
- **MongoDB Integration:** Store complaint information in a database.
- **Admin Interface:** View and manage reported complaints.
- **Responsive Interface:** User-friendly web interface.

## 🛠️ Technologies Used

**Frontend**
- React.js
- Vite
- JavaScript
- CSS
- Leaflet / React Leaflet

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

## 📁 Project Structure

```text
Water-Leakage-Reporting-System/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
└── server/
    ├── models/
    ├── routes/
    ├── index.js
    └── package.json
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hem79071-wq/Water-Leakage-Reporting-System.git
cd Water-Leakage-Reporting-System
```

### 2. Configure the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder and configure the required environment variables, such as your MongoDB connection string and server port, according to the backend code.

**Never commit your `.env` file or database credentials to GitHub.**

Start the backend using the start script defined in `server/package.json`, for example:

```bash
npm start
```

### 3. Configure the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## 🎯 Project Objective

The goal of this project is to make water leakage reporting easier by allowing users to submit location-based complaints and supporting administrators in reviewing and managing reports.

## 👩‍💻 Author

**Pooja S.**

GitHub: [hem79071-wq](https://github.com/hem79071-wq)

## 📌 Project Status

Developed as a full-stack web application with frontend, backend, and MongoDB database integration.
