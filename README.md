IMPETIK Inventory Management

Developed by: Abdullahi

IMPETIK Inventory Management is a full-stack application designed to help store managers efficiently track and manage their product inventory. The app provides simple CRUD functionality for products, allowing the manager to create, read, update, and delete product records.

Key Features

CRUD operations for products (Create, Read, Update, Delete)

Simple and clean user interface for quick management

Responsive design for use on different devices

Connected to PostgreSQL for reliable data storage

Tech Stack

Frontend: React (vanilla JavaScript)

Backend: Node.js, Express.js

Database: PostgreSQL

Why this tech stack:
While I am currently focusing on Java for fintech and enterprise projects, I chose this stack for IMPETIK because React and Node.js/Express allow fast development, flexibility, and I am comfortable working with them. PostgreSQL ensures reliable and structured data storage, which is essential for inventory management.

Installation and Setup
Backend

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file with the following content:

PORT=3000
PG_USER=postgres
PG_PASSWORD=123
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=impetik_inventory_management


Run database migrations or create tables if needed. (You can also run the provided seed script to populate sample products.)

Start the backend server:

npm run dev


The backend API will be running at: http://localhost:3000/api

Frontend

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Create a .env file with the following content:

BASE=http://localhost:3000/api


Start the frontend server:

npm start


The app will open in your browser at: http://localhost:3001

Seed Data

To test the application, you can use the following sample products:


  {
    "name": "Apple iPhone 14",
    "description": "Latest iPhone model",
    "price": 999,
    "image": "https://example.com/iphone14.jpg",
    "quantity": 4
  },


You can import this data via a seed script or manually using the app.

Usage

Open the app in your browser.

Add new products with their name, description, price, quantity, and image.

Edit or delete existing products as needed.

Monitor your inventory in the product list.

## Folder Structure

Backend Folder Strucutre

backend/
│
├─ src/
│   ├─ config/
│   │   └─ db.js            # PostgreSQL connection
│   │
│   ├─ routes/
│   │   └─ productRoutes.js
│   │
│   ├─ controllers/
│   │   └─ productController.js
│   │
│   ├─ services/
│   │   └─ productService.js # Business logic
│   │
│   ├─ models/
│   │   └─ productModel.js   # SQL queries (or Prisma schema)
│   │
│   ├─ middlewares/
│   │   └─ validateProduct.js
│   │
│   ├─ utils/
│   │   └─ errorHandler.js
│   │
│   ├─ app.js               # Express app
│   └─ server.js            # Start server
│
├─ package.json
├─ .env

Frontend Struc

frontend/
│
├─ src/
│   ├─ api/
│   │   └─ products.ts         # fetchProducts, addProduct etc
│   │
│   ├─ components/
│   │   ├─ ProductTable.tsx
│   │   ├─ ProductForm.tsx
│   │   ├─ AnalyticsChart.tsx
│   │   └─ LowStockBadge.tsx
│   │
│   ├─ pages/
│   │   └─ Dashboard.tsx
│   │
│   
│   │   
│   │
│   ├─ styles/
│   │   └─ globals.css
│   │
│   ├─ utils/
│   │   └─ formatters.ts
│   │
│   ├─ App.tsx
│   └─ main.tsx
│
├─ public/
├─ package.json

    └─ main.css

Screenshots


