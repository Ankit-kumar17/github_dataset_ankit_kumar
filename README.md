# GitHub Dataset API

A Node.js, Express.js, MongoDB Atlas based backend project for managing and serving GitHub Dataset records through REST APIs.

## 🚀 Features

- MongoDB Atlas Integration
- Express.js REST API
- Mongoose ODM
- Environment Variable Configuration
- Dataset Import Utility
- CRUD Operations
- Modular Folder Structure
- Error Handling
- Scalable Backend Architecture

---

## 📁 Project Structure

```bash
Backend
│
├── data
│   └── GITHUB dataset.json
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │
│   ├── middlewares
│   │
│   ├── models
│   │   └── Dataset.js
│   │
│   ├── routes
│   │
│   ├── services
│   │
│   └── utils
│       └── importData.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Utilities

- dotenv
- nodemon

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Backend
```

### Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string
```

---

## ▶️ Run Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server runs at:

```bash
http://localhost:5000
```

---

## 🗄️ MongoDB Atlas Setup

1. Create MongoDB Atlas Cluster
2. Create Database User
3. Add IP Address (0.0.0.0/0)
4. Copy Connection String
5. Add Connection String to `.env`

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/githubDatasetDB
```

---

## 📥 Import Dataset

Dataset is imported using utility script.

Run:

```bash
npm run import
```

This script:

- Reads JSON dataset
- Connects MongoDB Atlas
- Clears old records
- Inserts new records

---

## 📊 Dataset Schema

```javascript
{
  id: String,
  instruction: String,
  input: String,
  output: String,
  metadata: Object
}
```

---

## 🔗 API Endpoints

### Get All Records

```http
GET /datasets
```

### Get Single Record

```http
GET /datasets/:id
```

### Create Record

```http
POST /datasets
```

### Update Record

```http
PUT /datasets/:id
```

### Delete Record

```http
DELETE /datasets/:id
```

---

## 🧪 Testing

Verified:

- MongoDB Atlas Connection
- Dataset Import Script
- Data Storage in MongoDB
- REST API Functionality

---

## 📸 MongoDB Atlas

Successfully connected MongoDB Atlas and imported GitHub Dataset into the `datasets` collection.

---

## 👨‍💻 Author

**Ankit Kumar**

GitHub:
https://github.com/Ankit-kumar17

---

## 📄 License

This project is developed for educational and learning purposes.
