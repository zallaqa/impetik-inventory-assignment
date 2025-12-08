#  **Impetik Inventory Management System**

A clean, well-structured full-stack inventory dashboard for managing
store products, viewing stock analytics, and maintaining accurate
inventory records.

##  **Tech Stack**

![Static Badge](https://img.shields.io/badge/Frontend-React-blue)
![Static Badge](https://img.shields.io/badge/Backend-Node.js-green)
![Static Badge](https://img.shields.io/badge/Database-PostgreSQL-blue)
![Static Badge](https://img.shields.io/badge/Charts-Recharts-orange)
![Static Badge](https://img.shields.io/badge/Status-Completed-success)

##  **Features**

###  Core Features

-   Full CRUD operations for products
-   Product model with: **name, description, price, image, quantity**
-   Low stock alert (**quantity \< 5**)
-   Clean dashboard table/grid display
-   Add & Edit product form
-   Stock analytics using **Recharts**
-   Form and backend **validation**

###  Bonus Features Implemented

-    Search products by name
-    Visual analytics (bar chart / pie chart)
-    Modern UI with clean layout
-    Fully responsive design
-    Organized & scalable folder structure

##  **Project Structure**

    Impetik Inventory Management/
    │
    ├── backend/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   ├── db.js
    │   └── server.js
    │
    └── frontend/
        ├── src/
        │   ├── api/
        │   ├── components/
        │   ├── pages/
        │   ├── charts/
        │   ├── styles/
        │   ├── App.jsx
        │   └── main.jsx

##  **Installation & Setup**

###  Backend Setup

``` bash
cd backend
npm install
```

Create a `.env` file:

    DATABASE_URL=your_postgres_connection_string
    PORT=5000

Start the server:

``` bash
npm start
```

###  Frontend Setup

``` bash
cd frontend
npm install
npm run dev
```

##  **API Endpoints**

  Method   Endpoint        Description
  -------- --------------- --------------------
  GET      /products       Get all products
  POST     /products       Create new product
  PUT      /products/:id   Update product
  DELETE   /products/:id   Delete product

##  **Why This Stack?**

I chose **React + Node.js + PostgreSQL** because:

-    Fast development with clean separation of frontend & backend
-    PostgreSQL is reliable and perfect for structured product data
-    Recharts integrates smoothly with React for clean analytics
-    Express provides a robust and scalable API layer

##  **Author**

**Abdullahi Abdirizak** GitHub: https://github.com/zallaqa

##  **Submission**

