import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import { pool } from "./src/config/db.js";
import errorHandling from "./src/middlewares/errorHandler.middleware.js";
import productRoutes from './src/routes/product.route.js'



dotenv.config();
const app = express()

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


// test 
// app.get("/", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({ server: "OK", db_time: result.rows[0] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Database Connection failed" });
//   }
// });

app.use("/api/products",productRoutes);

app.use(errorHandling);

app.listen(PORT, () => {
    {
      console.log(`Server running on port http://localhost:${PORT}`);
    }
  })