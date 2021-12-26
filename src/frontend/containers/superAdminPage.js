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
        design: "init",
        potong:"init",
        press:"init",
        sablon:"init",
        bordir: "init",
        jahit:"init",
        finishing: "init",
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
            <div>
                <div className="pp3__header">Add Order</div>

                
                <div className="pp3__form">

                    <div className="pp3__form-group">
                        <label htmlFor="so">SO</label>
                        <input type="text" name="so" placeholder="SO number" onChange={this.inputHandler}/>
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="client">Client</label>
                        <input type="text" name="client" placeholder="Name of Client" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="product">Production</label>
                        <input type="text" name="product" placeholder="Product" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input type="date" name="deadline" placeholder="Due Date of Project" onChange={this.inputHandler}/>             
                    </div>

                </div>
                <div className="pp3__button-container">
                    <button onClick={()=>{this.props.confirmAdd(this.state)}}>Add Order</button>
                
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