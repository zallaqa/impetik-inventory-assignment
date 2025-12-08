import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

// import productIcon from '../assets/LucideStore.svg'
import productIcon from '../assets/products.png'
import DashbaordIcon from '../assets/dashboard.png'

const Sidebar = () => {
  return (
    <>
    
    <div className='sidebar'>
        <div className='sidebar_logo'>Impetik</div>
        <div className='sidebar_content'>
            <ul>

            <li>
                    <Link to="/">
                    <span className='icons'>
                    <img src={DashbaordIcon} alt="" width={22}/>
                    <span>Dashbaord</span>
                </span>
                     </Link>
                 </li>

                <li>
                    <Link to="/products">
                    <span className='icons'>
                    <img src={productIcon} alt="" width={22}/>
                    <span>Prodcuts</span>
                </span>
                     </Link>
                 </li>
            </ul>
        </div>
        <div className='sidebar_user'>
            <button>Profile</button>
            <button>Logout</button>
        </div>
    </div>
    
    </>
  )
}

export default Sidebar