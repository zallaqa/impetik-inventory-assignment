import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products.js";
import "../styles/LowStockTable.css";

export default function LowStockTable() {
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const products = await fetchProducts();

        const filtered = products.filter(p => Number(p.quantity) < 5);

        setLowStock(filtered);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    load();
  }, []);

  return (
    <div className="">
      <h2>Low Stock Products</h2>

      {lowStock.length === 0 ? (
        <p>No products are currently low on stock 🎉</p>
      ) : (
        <table className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {lowStock.map(p => (
              <tr key={p.id} className="">
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td className="status">⚠️ Low Stock</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
