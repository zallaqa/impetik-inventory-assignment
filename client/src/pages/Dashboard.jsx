import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import StockByCategory from '../components/charts/StockByCategory.jsx'
import LowStock from '../components/LowStockTable.jsx'
import RecentlyAdded from '../components/charts/RecentlyAdded.jsx'
import { fetchProducts } from '../api/products.js'

import '../styles/Dashabaord.css'

const Dashboard = () => {

  const [products,setProducts] = useState([]);

  useEffect(() =>{
    const load = async () =>{
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, [])

 // Total products
  const totalProducts = products.length;
 // Low stock 
  const lowStockCount = products.filter(p => Number(p.quantity) <5).length;
  // Sum of all stock quantities
  const totalStockQty  = products.reduce(
    (sum,p) => + Number(p.quantity),
    0
  );
  //New products today
  const today = new Date().toDateString();
  const newToday = products.filter(p => {
    const productDate = new Date(p.create_at).toDateString();
    return productDate === today;
  }).length;




  return (
    <div className='dashabaord'>


        <div className='dashabordCard'>
        <Card title="Total Products" quantity={totalProducts}/>
        <Card title="Low Stock" quantity={lowStockCount} stock={lowStockCount > 0 ? "Stock Low" : "All Good"} />
        <Card title="Total Stock Quantity" quantity={totalStockQty} />
        <Card title="New Products Today" quantity={newToday}/>
        </div>

        <div className='StockByCategory'>
        <StockByCategory  />
        <RecentlyAdded />
        </div>

        <LowStock />

    </div>
  )
}

export default Dashboard