import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import '../assets/styles/editTask.css'
import {getTask} from "../redux/action/user"; 
import {searchOrd, updateOrderStatus} from "../redux/action/superAdmin"; 
import { API_URL } from "../constants/API";


class TaskManager extends React.Component {

    state = {
        so: "",
        searchTask: "",
        deadline:"",
        order_status: "",
    }

    componentDidMount() {
        if(this.props.userGlobal.auth_status === "super_admin" || this.props.userGlobal.auth_status==="admin"){
            this.setState({ searchTask: this.props.userGlobal.searchTask })
        } else {
            console.log(this.props.userGlobal.auth_status)
            //this.redirectHandler();
        }
    }

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    inputHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    refreshPage = () => {
        window.location.reload(false);
      }

    searchOrd = (data) => {
        console.log(data);
          Axios.post(API_URL + "/search/so", {
            so: data,
          })
            .then((res) => {
              alert("Search finished");
              console.log(res.data.data[0]);
                this.setState({ 
                    searchTask: res.data.data[0],
                    order_status: res.data.data[0].order_status,
                    deadline: res.data.data[0].deadline,
                })
            })
            .catch((err) => {
              alert("Search failed, order has probably finished");
              console.log(err);
            });
          };
      

    renderSearchTask = () => {
        if (this.state.searchTask) {
            const newDeadline = this.state.searchTask.deadline.slice(0, 19).replace('T', ' ')
            console.log(this.state)
                return( <div className="test-radios">
                            <div className="test-text">{this.state.searchTask.so}</div>
                            <div className="test-text">{this.state.searchTask.client}</div>
                            <div className="pp3__form-group">
                                <input type="date" name="deadline" defaultValue={this.state.deadline} onChange={this.inputHandler}/>             
                            </div>
                            
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="order_status">Done</label>
                                <input className="selector" name="order_status" type="radio" value="done" defaultChecked={this.state.order_status === "done"} onChange={this.inputHandler} />
                                <label htmlFor="order_status">Started</label>
                                <input className="selector" name="order_status" type="radio" value="started"  defaultChecked={this.state.order_status === "started"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <button onClick={()=>{this.props.updateOrderStatus(this.state);this.refreshPage()}}>Update</button>
                        </div>

                    )
        } else {
            return(
                <div className="test-radios">
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                </div>
            )
        }
    }

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

        return <div className="test-base-container">
            <div className="test-header">Edit Task</div>
            <div className="test-btn-container">
                <input className="text-input" name="so" type="text" placeholder="Type your SO" onChange={this.inputHandler} />   
                {
                    this.props.userGlobal.auth_status === "super_admin" ? 
                <button onClick={()=>{this.searchOrd(this.state.so)}} className="test-btn">SEARCH</button> :
                ""
                }
            </div>
                <div className="test-content">
                    
                    <div className="test-legends">                        
                        <div className="test-text">SO No.</div>
                        <div className="test-text">Name</div>
                        <div className="test-text">Deadline</div>
                        <div className="test-text">Status</div>
                    </div>
                            {this.renderSearchTask()}
                </div>
            </div>
    }

    }

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user,
    }
}

const mapDispatchToProps = {
    getTask,
    searchOrd,
    updateOrderStatus
}
    

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager); 
