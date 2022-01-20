import React from 'react'
import { connect } from "react-redux";
import { confirmLog } from "../redux/action/user";  
import { Redirect } from 'react-router-dom'
import '../assets/styles/loginPage.css'

class Login extends React.Component {

    state = { 
        username: "",
        password: "",
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

    handleKeypress = (e) => {
        if (e.keyCode === 13) {
            this.props.confirmLog(this.state) 
            this.redirectHandler()
        }
      }

    render () {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }
        console.log(this.state)

        return (
            <div className="pp3__login-base-container">
                <div className="pp3__login-content">
                <div className="pp3__form">
                    <div className="pp3__form-group">
                        <input type="text" name="username" placeholder="USERNAME" onChange={this.inputHandler}></input>                
                    </div>
                    <div className="pp3__form-group">
                        <input type="password" name="password" placeholder="PASSWORD" onChange={this.inputHandler}></input>                
                    </div>
                    <div className="pp3__button-container">
                    <button type="submit" onKeyPress={this.handleKeypress} onClick={()=>{this.props.confirmLog(this.state) ; this.redirectHandler()}}>LOG IN</button>
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
    confirmLog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);