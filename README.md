# express-auth-task-api

## 🔐 Task Auth API (Node.js + MongoDB)

A clean and modular backend API built using **Node.js**, **Express**, and **MongoDB**.  
It supports **JWT-based login/registration using phone number only** and allows users to **create, list, and update tasks**.

---

## ✨ Features

- ✅ Register or Login with phone number (no password)
- ✅ JWT-based authentication
- ✅ Create a new task
- ✅ List tasks of logged-in user
- ✅ Update task title or completion status
- ✅ Middleware for protected routes
- ✅ Clean MVC structure for scalability

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB (Local Setup)
- Mongoose
- JWT (jsonwebtoken)
- dotenv

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-auth-task-api.git
cd express-auth-task-api
# 📱 Task Auth API — Node.js + MongoDB

A clean, modern REST API built using **Express.js** and **MongoDB** that allows users to register/login via phone number (no password) and manage tasks. This project follows industry-standard folder structure, JWT-based authentication, and includes a Postman collection for easy testing.

---

## 🚀 Features

- 🔐 Register/Login using **phone number only**
- 🪪 JWT Authentication (No password required)
- 🧾 Create, List, and Update Tasks
- 🧱 MVC Folder Structure
- ✅ Protected routes with middleware
- 🧪 Postman Collection included

---

## 🧾 API Endpoints

| Method | Endpoint              | Description                     | Auth Required |
|--------|-----------------------|----------------------------------|----------------|
| POST   | `/api/auth`           | Register or Login (phone only)  | ❌             |
| POST   | `/api/tasks`          | Create new task                 | ✅             |
| GET    | `/api/tasks`          | Get user's tasks                | ✅             |
| PUT    | `/api/tasks/:taskId`  | Update a task (title/status)    | ✅             |

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Local)**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **dotenv**
- **Postman (for testing)**

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install Dependencies

npm install

3. Set Up Environment Variables
Create a .env file in the root folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/your-collection
JWT_SECRET=your_jwt_secret

4. Start MongoDB (if not already running)

mongod

The API will be running at:
http://localhost:5000

🧪 Postman Collection
A Postman collection is available for testing all endpoints.

📁 File: /postman/TaskAuthAPI.postman_collection.json

To use:

Open Postman

Click Import

Select the .json file

Test all 4 APIs easily

🧼 Project Structure

.
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── models/
│   ├── userModel.js
│   └── taskModel.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── postman/
│   └── TaskAuthAPI.postman_collection.json
├── .env (local only)
├── .gitignore
├── README.md
├── server.js
└── package.json


👨‍💻 Author
Your Thivgar R
Email: thivagarradhakrishnan@gmail.com
LinkedIn: https://www.linkedin.com/in/thivagar-r-in/

📃 License
This project is licensed under the MIT License.


---

## ✅ Next Steps

1. Add this file to your repo:
```bash
touch README.md
# Paste the content and save it
git add README.md
git commit -m "Added professional README"
git push





