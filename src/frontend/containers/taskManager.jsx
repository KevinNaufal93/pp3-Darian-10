import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import '../assets/styles/taskManager.css'
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

    componentWillMount() {
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

    handleKeypress = (e) => {
    if (e.keyCode === 13) {
        this.props.confirmAdd(this.state)
    }}
      

    renderSearchTask = () => {
        if (this.state.searchTask) {
            const newDeadline = this.state.searchTask.deadline.slice(0, 19).replace('T', ' ')
            console.log(this.state)
                return(
                    <tr>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid', textAlign: "center"}}>{this.state.searchTask.so}</td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid', textAlign: "center"}}>{this.state.searchTask.client}</td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid', marginBottom: "0"}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="potong">Done</label>
                                <input className="selector" name="design" type="radio" value="done" defaultChecked={this.state.searchTask.design === 'done' ? ()=>{this.setState({design: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="design">On Progress</label>
                                <input className="selector" name="design" type="radio" value="on_progress" defaultChecked={this.state.searchTask.design === 'on_progress' ? ()=>{this.setState({design: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="design">Not Started</label>
                                <input className="selector" name="design" type="radio" value="not_started" defaultChecked={this.state.searchTask.design === 'not_started' ? ()=>{this.setState({design: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="design">Unavailable</label>
                                <input className="selector" name="design" type="radio" value="unavailable" defaultChecked={this.state.searchTask.design === 'unavailable' ? ()=>{this.setState({design: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid', marginBottom: "0"}}>
                            <div className="pp3__form-radio">
                            <span className="radiocontainer">    
                                <label htmlFor="potong">Done</label>
                                <input className="selector" name="potong" type="radio" value="done" defaultChecked={this.state.searchTask.potong === 'done' ? ()=>{this.setState({potong: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="potong">On Progress</label>
                                <input className="selector" name="potong" type="radio" value="on_progress" defaultChecked={this.state.searchTask.potong === 'on_progress' ? ()=>{this.setState({potong: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="potong">Not Started</label>
                                <input className="selector" name="potong" type="radio" value="not_started" defaultChecked={this.state.searchTask.potong === 'not_started' ? ()=>{this.setState({potong: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="potong">Unavailable</label>
                                <input className="selector" name="potong" type="radio" value="unavailable" defaultChecked={this.state.searchTask.potong === 'unavailable' ? ()=>{this.setState({potong: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                            </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="press">Done</label>
                                <input className="selector" name="press" type="radio" value="done" defaultChecked={this.state.searchTask.press === 'done' ? ()=>{this.setState({press: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="press">On Progress</label>
                                <input className="selector" name="press" type="radio" value="on_progress" defaultChecked={this.state.searchTask.press === 'on_progress' ? ()=>{this.setState({press: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="press">Not Started</label>
                                <input className="selector" name="press" type="radio" value="not_started" defaultChecked={this.state.searchTask.press === 'not_started' ? ()=>{this.setState({press: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="press">Unavailable</label>
                                <input className="selector" name="press" type="radio" value="unavailable" defaultChecked={this.state.searchTask.press === 'unavailable' ? ()=>{this.setState({press: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="sablon">Done</label>
                                <input className="selector" name="sablon" type="radio" value="done" defaultChecked={this.state.searchTask.sablon === 'done' ? ()=>{this.setState({sablon: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="sablon">On Progress</label>
                                <input className="selector" name="sablon" type="radio" value="on_progress" defaultChecked={this.state.searchTask.sablon === 'on_progress' ? ()=>{this.setState({sablon: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="sablon">Not Started</label>
                                <input className="selector" name="sablon" type="radio" value="not_started" defaultChecked={this.state.searchTask.sablon === 'not_started' ? ()=>{this.setState({sablon: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="sablon">Unavailable</label>
                                <input className="selector" name="sablon" type="radio" value="unavailable" defaultChecked={this.state.searchTask.sablon === 'unavailable' ? ()=>{this.setState({sablon: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="bordir">Done</label>
                                <input className="selector" name="bordir" type="radio" value="done" defaultChecked={this.state.searchTask.bordir === 'done' ? ()=>{this.setState({bordir: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="bordir">On Progress</label>
                                <input className="selector" name="bordir" type="radio" value="on_progress" defaultChecked={this.state.searchTask.bordir === 'on_progress' ? ()=>{this.setState({bordir: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="bordir">Not Started</label>
                                <input className="selector" name="bordir" type="radio" value="not_started" defaultChecked={this.state.searchTask.bordir === 'not_started' ? ()=>{this.setState({bordir: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="bordir">Unavailable</label>
                                <input className="selector" name="bordir" type="radio" value="unavailable" defaultChecked={this.state.searchTask.bordir === 'unavailable' ? ()=>{this.setState({bordir: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="jahit">Done</label>
                                <input className="selector" name="jahit" type="radio" value="done" defaultChecked={this.state.searchTask.jahit === 'done' ? ()=>{this.setState({jahit: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="jahit">On Progress</label>
                                <input className="selector" name="jahit" type="radio" value="on_progress" defaultChecked={this.state.searchTask.jahit === 'on_progress' ? ()=>{this.setState({jahit: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="jahit">Not Started</label>
                                <input className="selector" name="jahit" type="radio" value="not_started" defaultChecked={this.state.searchTask.jahit === 'not_started' ? ()=>{this.setState({jahit: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="jahit">Unavailable</label>
                                <input className="selector" name="jahit" type="radio" value="unavailable" defaultChecked={this.state.searchTask.jahit === 'unavailable' ? ()=>{this.setState({jahit: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="finishing">Done</label>
                                <input className="selector" name="finishing" type="radio" value="done" defaultChecked={this.state.searchTask.finishing === 'done' ? ()=>{this.setState({finishing: 'done'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="finishing">On Progress</label>
                                <input className="selector" name="finishing" type="radio" value="on_progress" defaultChecked={this.state.searchTask.finishing === 'on_progress' ? ()=>{this.setState({finishing: 'on_progress'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="finishing">Not Started</label>
                                <input className="selector" name="finishing" type="radio" value="not_started" defaultChecked={this.state.searchTask.finishing === 'not_started' ? ()=>{this.setState({finishing: 'not_started'})} : ""} onChange={this.inputHandler} />
                                <label htmlFor="finishing">Unavailable</label>
                                <input className="selector" name="finishing" type="radio" value="unavailable" defaultChecked={this.state.searchTask.finishing === 'unavailable' ? ()=>{this.setState({finishing: 'unavailable'})} : ""} onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td>
                        {/* <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-group">
                                <label htmlFor="deadline">Deadline</label>
                                <input type="date" name="deadline" defaultValue={newDeadline} onChange={this.inputHandler}/>             
                            </div>
                        </td>
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <div className="pp3__form-radio">
                                <span className="radiocontainer">
                                <label htmlFor="order_status">Done</label>
                                <input className="selector" name="order_status" type="radio" value="done" onChange={this.inputHandler} />
                                <label htmlFor="order_status">Started</label>
                                <input className="selector" name="order_status" type="radio" value="started" onChange={this.inputHandler} />   
                                </span>
                            </div>
                        </td> */}
                        <td style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid'}}>
                            <button type="submit" onClick={()=>{this.props.updateOrder(this.state)}}>Update</button>
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
            </tr>
            )
        }
    }

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

        return <div className="pp3__supAdm-base-container">
                    <div className="pp3__supAdm-content">
                        <div className="pp3__supAdm-header">Task Edit</div>
                        <table className="pp3__supAdm-table" style={{borderWidth:"1px", borderColor:"#fff", borderStyle:'solid', verticalAlign:"middle"}}>
                            <thead className="table-light" style={{backgroundColor:"#fff"}}>
                                <tr>
                                    <th scope="col">SO Nomor</th>
                                    <th scope="col">Nama</th>                                    
                                    <th scope="col">Design</th>
                                    <th scope="col">Potong</th>
                                    <th scope="col">Press</th>
                                    <th scope="col">Sablon</th>
                                    <th scope="col">Bordir</th>
                                    <th scope="col">Jahit</th>
                                    <th scope="col">Finishing</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderSearchTask()}
                            </tbody>
                        </table>
                    </div>
                    <div className="pp3__adm-btn-container">
                    <input className="text-input" name="so" type="text" placeholder="Please input your SO" onChange={this.inputHandler} />   
                    <button onClick={()=>{this.searchOrd(this.state.so)}} className="pp3__adm-btn">Search SO</button>
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
    updateOrder
}
    

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager); 
