import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/Products/ProductList.jsx";
import ProductDetail from './pages/Products/ProductDetail.jsx'
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "./styles/App.css";
import './styles/globals.css'

const App = () => {
  return (

    <BrowserRouter>
      <div className="dashboard-layout">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main-area">
          <div className="topbar">
            <Topbar />
          </div>

          <div className="content">

            <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />


            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />         
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
