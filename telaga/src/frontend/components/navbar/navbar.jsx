import React from 'react'

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/styles/navbar.css'
import {logoutUser} from '../../redux/action/user';

class MyNavbar extends React.Component {

    render () {
    console.log(this.props.userGlobal)
    return (
        <div className="pp3__navbar">
            <div className="pp3__navbar-links">
                <div class="hub">
                    <span>Da</span>
                    <span>Rian</span>
                </div>
                <div className="pp3__navbar-links_container">
                    <p><Link to="/">Home</Link></p>

                    { 
                        this.props.userGlobal.auth_status === "super_admin" ? 
                        <p><Link to="/sa">Task Management</Link></p> :
                        this.props.userGlobal.auth_status === "admin" ?
                        <p><Link to="/">View Task</Link></p> :
                        <p><Link to="/register">Sign Up</Link></p>
                    }
                    
                    {
                        this.props.userGlobal.username.length > 2 ?
                        <p>Hello, {this.props.userGlobal.username}</p> :
                        <p>Please Register or Sign in</p>
                    }
                    

                </div>
            </div>
            <div className="pp3__navbar-item">

            { 
                this.props.userGlobal.username.length > 2 ? 
                <button onClick={()=>{this.props.logoutUser()}}><Link to="/">Sign Out</Link></button> :
                <button><Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>Sign In</Link></button>
            }
                    
            </div>
        </div>
    )
    }
}

const mapStateToProps =(state)=> {
    return{
        userGlobal: state.user,
    }
};

const mapDispatchToProps = {
    logoutUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);
