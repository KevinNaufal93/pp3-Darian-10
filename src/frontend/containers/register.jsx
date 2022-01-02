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
        referral_code: "",
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
        if (this.state.password === this.state.confirmPassword) {
            if (this.state.referral_code === "kmzway87aa") {
                this.props.confirmReg(this.state)
                this.redirectHandler()
            } else {
                alert("Referral code is wrong")
            }
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
            <div className="pp3__register-base-container">
                <div className="pp3__register-content">

                <div className="pp3__form">

                    <div className="pp3__form-group">
                        <input type="text" name="username" placeholder="USERNAME" onChange={this.inputHandler}/>
                    </div>

                    <div className="pp3__form-group">
                        <input type="text" name="email" placeholder="EMAIL" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <input type="password" name="password" placeholder="PASSWORD" onChange={this.inputHandler}/>              
                    </div>

                    <div className="pp3__form-group">
                        <input type="password" name="confirmPassword" placeholder="CONFIRM PASSWORD" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <input type="text" name="fullname" placeholder="FULL NAME" onChange={this.inputHandler}/>           
                    </div>
                    <div className="pp3__form-group">
                        <input type="text" name="referral_code" placeholder="REFERRAL CODE" onChange={this.inputHandler}/>           
                    </div>
                    <div className="pp3__button-container">
                    <button onClick={()=>{this.passwordChecker()}}>Register</button>
                </div>
                </div>

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