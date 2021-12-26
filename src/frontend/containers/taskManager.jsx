import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import '../assets/styles/adminPage.css'
import {getTask} from "../redux/action/user"; 
import {searchOrd, updateOrder} from "../redux/action/superAdmin"; 
import { API_URL } from "../constants/API";


class TaskManager extends React.Component {

    state = {
        so: "",
        searchTask: "",
        design: "",
        potong: "",
        press: "",
        sablon: "",
        bordir: "",
        jahit: "",
        finishing: "",
        deadline:"",
    }

    componentDidMount() {
        if(this.props.userGlobal.auth_status === "super_admin" || this.props.userGlobal.auth_status==="admin"){
            this.setState({ searchTask: this.props.userGlobal.searchTask })
        } else {
            this.redirectHandler();
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

    searchOrd = (data) => {
        console.log(data);
          Axios.post(API_URL + "/search/so", {
            so: data,
          })
            .then((res) => {
              alert("Search finished");
              console.log(res.data.data[0]);
                this.setState({ searchTask: res.data.data[0] })
            })
            .catch((err) => {
              alert("Search failed, order has probably finished");
              console.log(err);
            });
          };
      

    renderSearchTask = () => {
        if (this.state.searchTask) {
            const newDeadline = this.state.searchTask.deadline.slice(0, 19).replace('T', ' ')

                return(
                    <tr>
                        <td>{this.state.searchTask.so}</td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="design">Yes</label>
                                <input className="selector" name="design" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="design">No</label>
                                <input className="selector" name="design" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="potong">Yes</label>
                                <input className="selector" name="potong" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="potong">No</label>
                                <input className="selector" name="potong" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="press">Yes</label>
                                <input className="selector" name="press" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="press">No</label>
                                <input className="selector" name="press" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="sablon">Yes</label>
                                <input className="selector" name="sablon" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="sablon">No</label>
                                <input className="selector" name="sablon" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="bordir">Yes</label>
                                <input className="selector" name="bordir" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="bordir">No</label>
                                <input className="selector" name="bordir" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="jahit">Yes</label>
                                <input className="selector" name="jahit" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="jahit">No</label>
                                <input className="selector" name="jahit" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="finishing">Yes</label>
                                <input className="selector" name="finishing" type="radio" value="yes" onChange={this.inputHandler} />
                                <label htmlFor="finishing">No</label>
                                <input className="selector" name="finishing" type="radio" value="no" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-group">
                                <label htmlFor="deadline">Deadline</label>
                                <input type="date" name="deadline" defaultValue={newDeadline} onChange={this.inputHandler}/>             
                            </div>
                        </td>
                        <td>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="order_status">Done</label>
                                <input className="selector" name="order_status" type="radio" value="done" onChange={this.inputHandler} />
                                <label htmlFor="order_status">Started</label>
                                <input className="selector" name="order_status" type="radio" value="started" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td>
                            <button onClick={()=>{this.props.updateOrder(this.state)}}>Update</button>
                        </td>
                    </tr>
                    )
        } else {
            return(
                <tr>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td> 
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
                <td className="align-middle">-</td>
            </tr>
            )
        }
    }

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

        return <div className="base-container">
                    <div className="content">
                        <div className="header">Task Edit</div>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">SO Nomor</th>
                                    <th scope="col">Design</th>
                                    <th scope="col">Potong</th>
                                    <th scope="col">Press</th>
                                    <th scope="col">Sablon</th>
                                    <th scope="col">Bordir</th>
                                    <th scope="col">Jahit</th>
                                    <th scope="col">Finishing</th>
                                    <th scope="col">Deadline</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderSearchTask()}
                            </tbody>
                        </table>
                    </div>

                    <input className="text-input" name="so" type="text" placeholder="Please input your SO" onChange={this.inputHandler} />   

                    <button onClick={()=>{this.searchOrd(this.state.so)}} className="pp3__adm-btn">Search SO</button>

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
    updateOrder
}
    

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager); 
