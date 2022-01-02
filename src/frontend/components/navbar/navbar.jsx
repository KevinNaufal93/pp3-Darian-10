import React from 'react'
import Logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/styles/navbar.css'
import {logoutUser} from '../../redux/action/user';

class MyNavbar extends React.Component {

    render () {
    return (
        <div className="pp3__navbar">
            <div className="pp3__navbar-links">
                <div class="hub">
                <img src={Logo} style={{ objectFit: 'cover', height: '7rem', width: '100%' }} alt="..." />
                </div>
                <div className="pp3__navbar-links_container">
                    <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></p>

                    { 
                        this.props.userGlobal.auth_status === "super_admin" ? 
                        <p><Link to="/sa" style={{ textDecoration: 'none', color: 'white' }}>TASK MANAGEMENT</Link></p> :
                        this.props.userGlobal.auth_status === "admin" ?
                        <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VIEW TASK</Link></p> :
                        <p><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>SIGN UP</Link></p>
                    }
                    
                    {
                        this.props.userGlobal.username.length > 2 ?
                        <p>HELLO, {this.props.userGlobal.username}</p> :
                        <p>Please Register or Sign in</p>
                    }
                    

                </div>
            </div>
            <div className="pp3__navbar-item">

            { 
                this.props.userGlobal.username.length > 2 ? 
                <button onClick={()=>{this.props.logoutUser()}}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Sign Out</Link></button> :
                <button><Link to="/login" style={{ textDecoration: 'none', color: "#fff"}}>Sign In</Link></button>
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
