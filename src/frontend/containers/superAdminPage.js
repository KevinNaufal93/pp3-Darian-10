import React from 'react'
import { connect } from "react-redux";
import { confirmAdd } from "../redux/action/superAdmin";  
import { Redirect } from 'react-router-dom'
import '../assets/styles/superAdminPage.css'

class Register extends React.Component {

    state = { 
        redirect: false,
        so: "",
        client: "",
        product: "",
        design: "unavailable",
        potong:"unavailable",
        press:"unavailable",
        sablon:"unavailable",
        bordir: "unavailable",
        jahit:"unavailable",
        finishing: "unavailable",
        deadline: "",
        order_status: "started"
    }
    
    redirectHandler = () => {
        console.log(this.props.userGlobal.auth_status)
        this.setState({redirect: true})
    }

    resetForm = () => { 
        this.myFormRef.reset();
    }

    inputHandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            alert('Enter pressed')
            //this.props.confirmAdd(this.state)
        }
    }

    render () {
        console.log(this.state)

        if(this.props.userGlobal.auth_status === "super_admin") {
            //alert("Authorization Granted")
        } else {
            this.redirectHandler();
        }

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

        return (
            <div className="pp3__taskCreation-base-container">
                <div className="pp3__taskCreation-content">
                    <div className="pp3__taskCreation-form">
                        <div className="pp3__form-group">
                            <input type="text" name="so" placeholder="SO Number" onChange={this.inputHandler}/>
                        </div>

                        <div className="pp3__taskCreation-form-group">
                            <input type="text" name="client" placeholder="Name of Client" onChange={this.inputHandler}/>             
                        </div>

                        <div className="pp3__taskCreation-form-group">
                            <input type="text" name="product" placeholder="Product" onChange={this.inputHandler}/>             
                        </div>

                        <div className="pp3__taskCreation-form-group">
                            <input type="date" name="deadline" placeholder="Due Date of Project" onChange={this.inputHandler}/>             
                        </div>
                        <div className="pp3__button-container">
                        <button type="submit" onKeyPress={(e)=>{this.handleKeypress(e)}} onClick={()=>{this.props.confirmAdd(this.state)}}>Add Order</button>
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
    confirmAdd,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);