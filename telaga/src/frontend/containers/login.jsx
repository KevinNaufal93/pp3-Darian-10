import React from 'react'
import { connect } from "react-redux";
import { confirmLog } from "../redux/action/user";  
import { Redirect } from 'react-router-dom'
import '../assets/styles/registerPage.css'

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

    render () {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }
        console.log(this.state)

        return (
            <div>
                <div className="pp3__header">LOGIN</div>

                <div className="pp3__form">

                    <div className="pp3__form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={this.inputHandler}></input>                
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={this.inputHandler}></input>                
                    </div>

                </div>
                <div className="pp3__button-container">
                    <button onClick={()=>{this.props.confirmLog(this.state) ; this.redirectHandler()}}>Login</button>
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