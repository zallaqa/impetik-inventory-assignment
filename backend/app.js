import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { pool } from "./src/config/db.js";
import errorHandling from "./src/middlewares/errorHandler.middleware.js";
import productRoutes from './src/routes/product.route.js';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Impetik Inventory API",
      version: "1.0.0",
      description: "API documentation for Impetik Inventory",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  // Path to route files with Swagger comments
  apis: ["./src/routes/product.route.js"],
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Setup Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Optional: Serve raw Swagger JSON for exporting
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);

// Routes
app.use("/api/products", productRoutes);

// Error handling middleware
app.use(errorHandling);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
