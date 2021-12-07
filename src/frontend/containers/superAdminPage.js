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
        design: "",
        potong:"",
        press:"",
        sablon:"",
        jahit:"",
        finishing: "",
        deadline: "",
        order_status: ""
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

                    <label htmlFor="design">Design</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="design">Yes</label>
                        <input className="selector" name="design" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="design">No</label>
                        <input className="selector" name="design" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="potong">Potong</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="potong">Yes</label>
                        <input className="selector" name="potong" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="potong">No</label>
                        <input className="selector" name="potong" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="press">Press</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="press">Yes</label>
                        <input className="selector" name="press" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="press">No</label>
                        <input className="selector" name="press" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="sablon">Sablon</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="sablon">Yes</label>
                        <input className="selector" name="sablon" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="sablon">No</label>
                        <input className="selector" name="sablon" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="bordir">Bordir</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="bordir">Yes</label>
                        <input className="selector" name="bordir" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="bordir">No</label>
                        <input className="selector" name="bordir" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="jahit">Jahit</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="jahit">Yes</label>
                        <input className="selector" name="jahit" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="jahit">No</label>
                        <input className="selector" name="jahit" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
                    </div>

                    <label htmlFor="finishing">Finishing</label>
                    <div className="pp3__form-radio">
                        <span className="radiocontainer">
                        <label htmlFor="finishing">Yes</label>
                        <input className="selector" name="finishing" type="radio" value="yes" onChange={this.inputHandler} />
                        <label htmlFor="finishing">No</label>
                        <input className="selector" name="finishing" type="radio" value="no" onChange={this.inputHandler} />   
                        </span>
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