import React from 'react'
import '../assets/styles/landingPage.css'
import {Link} from 'react-router-dom';

const landingPage = () => {
    return (
        <div className="base-container">
            <div className="content">
                <div className="header">
                    WELCOME, TO TELAGA'S<br/>ORDER MANAGEMENT WEBSITE
                </div>
               <button className="pp3__button"><Link to='/av' style={{ textDecoration: 'none', color:"#fff"}}>Task Overview</Link></button> 
            </div>
        </div>
    )
}

export default landingPage
