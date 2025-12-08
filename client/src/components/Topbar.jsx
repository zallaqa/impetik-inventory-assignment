import React from 'react'
import '../styles/Topbar.css'

import categoryIcon from '../assets/user.png'


const Topbar = () => {
  return (
    <div className='topbar'>

        <div className='topbarTitle'><h3>Invenotry Managment Dashboard</h3></div>

        <div className='top_user'>
            <p>Abdullahi</p>
            <img src={categoryIcon} alt="" width={30} />
        </div>

    </div>
  )
}

export default Topbar
