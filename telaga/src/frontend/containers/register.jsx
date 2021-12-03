import React from 'react'
import { connect } from "react-redux";
import { confirmReg } from "../redux/action/user";  
import { Redirect } from 'react-router-dom'
import '../assets/styles/registerPage.css'

class Register extends React.Component {

    state = { 
        iduser: 0,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        fullname: "",
        auth_status: "admin",
    }
    
    redirectHandler = () => {
        this.setState({redirect: true})
    }

    inputHandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    passwordChecker = () => {
        if (this.state.password == this.state.confirmPassword) {
            this.props.confirmReg(this.state)
            this.redirectHandler()
        } else {
            alert("Password does not match")
        }
    }

    render () {
        
        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }
        console.log(this.state)

        return (
            <div>
                <div className="pp3__header">REGISTER</div>

                <div className="pp3__form">

                    <div className="pp3__form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={this.inputHandler}/>
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={this.inputHandler}/>              
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="confirm password" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" name="fullname" placeholder="full name" onChange={this.inputHandler}/>           
                    </div>
                </div>
                <div className="pp3__button-container">
                    <button onClick={()=>{this.passwordChecker()}}>Register now!</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user,
    }
}

const mapDispatchToProps = {
    confirmReg,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);