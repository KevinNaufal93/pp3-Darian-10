import React from 'react'
import { connect } from "react-redux";
import { confirmAdd } from "../redux/action/superAdmin";  
import { Redirect } from 'react-router-dom'
import '../assets/styles/superAdminPage.css'

class Register extends React.Component {

    state = { 
        redirect: false,
        order_id: "",
        order_desc: "",
        order_spec: "",
        deadline: "",
        order_status: "",
    }
    
    redirectHandler = () => {
        console.log(this.props.userGlobal.auth_status)
        this.setState({redirect: true})
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
                        <label htmlFor="order_id">Order No</label>
                        <input type="text" name="order_id" placeholder="Order Number" onChange={this.inputHandler}/>
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="order_desc">Order Detail</label>
                        <input type="text" name="order_desc" placeholder="Description of order" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="order_spec">Specifications</label>
                        <input type="text" name="order_spec" placeholder="Detail on order specifications" onChange={this.inputHandler}/>              
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input type="date" name="deadline" placeholder="Due Date of Project" onChange={this.inputHandler}/>             
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="order_status">Status</label>
                        <input type="text" name="order_status" placeholder="Priority" onChange={this.inputHandler}/>           
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