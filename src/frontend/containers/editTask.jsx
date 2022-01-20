import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import '../assets/styles/editTask.css'
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
                    design: res.data.data[0].design,
                    potong: res.data.data[0].potong,
                    press: res.data.data[0].press,
                    sablon: res.data.data[0].sablon,
                    bordir: res.data.data[0].bordir,
                    jahit: res.data.data[0].jahit,
                    finishing: res.data.data[0].finishing
                })
            })
            .catch((err) => {
              alert("Search failed, order has probably finished");
              console.log(err);
            });
          };
      
        handleKeypress = (e) => {
          if (e.keyCode === 13) {
            this.props.updateOrder(this.state)
            this.refreshPage()
          }
        };

    renderSearchTask = () => {
        if (this.state.searchTask) {
            console.log(this.state)
                return( <div className="test-radios">
                        <div className="test-text">{this.state.searchTask.so}</div>
                        <div className="test-text">{this.state.searchTask.client}</div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="design">Done</label>
                                <input className="selector" name="design" type="radio" value="done" defaultChecked={this.state.design === "done"} onChange={this.inputHandler} />
                                <label htmlFor="design">On Progress</label>
                                <input className="selector" name="design" type="radio" value="on_progress" defaultChecked={this.state.design === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="design">Not Started</label>
                                <input className="selector" name="design" type="radio" value="not_started" defaultChecked={this.state.design === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="design">Unavailable</label>
                                <input className="selector" name="design" type="radio" value="unavailable" defaultChecked={this.state.design === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <div className="test-radio-form">
                            <span className="radiocontainer">    
                                <label htmlFor="potong">Done</label>
                                <input className="selector" name="potong" type="radio" value="done" defaultChecked={this.state.potong === "done"} onChange={this.inputHandler} />
                                <label htmlFor="potong">On Progress</label>
                                <input className="selector" name="potong" type="radio" value="on_progress" defaultChecked={this.state.potong === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="potong">Not Started</label>
                                <input className="selector" name="potong" type="radio" value="not_started" defaultChecked={this.state.potong === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="potong">Unavailable</label>
                                <input className="selector" name="potong" type="radio" value="unavailable" defaultChecked={this.state.potong === "unavailable"} onChange={this.inputHandler} />   
                            </span>
                            </div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="press">Done</label>
                                <input className="selector" name="press" type="radio" value="done" defaultChecked={this.state.press === "done"} onChange={this.inputHandler} />
                                <label htmlFor="press">On Progress</label>
                                <input className="selector" name="press" type="radio" value="on_progress" defaultChecked={this.state.press === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="press">Not Started</label>
                                <input className="selector" name="press" type="radio" value="not_started" defaultChecked={this.state.press === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="press">Unavailable</label>
                                <input className="selector" name="press" type="radio" value="unavailable" defaultChecked={this.state.press === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="sablon">Done</label>
                                <input className="selector" name="sablon" type="radio" value="done" defaultChecked={this.state.sablon === "done"} onChange={this.inputHandler} />
                                <label htmlFor="sablon">On Progress</label>
                                <input className="selector" name="sablon" type="radio" value="on_progress" defaultChecked={this.state.sablon === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="sablon">Not Started</label>
                                <input className="selector" name="sablon" type="radio" value="not_started" defaultChecked={this.state.sablon === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="sablon">Unavailable</label>
                                <input className="selector" name="sablon" type="radio" value="unavailable" defaultChecked={this.state.sablon === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="bordir">Done</label>
                                <input className="selector" name="bordir" type="radio" value="done" defaultChecked={this.state.bordir === "done"} onChange={this.inputHandler} />
                                <label htmlFor="bordir">On Progress</label>
                                <input className="selector" name="bordir" type="radio" value="on_progress" defaultChecked={this.state.bordir === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="bordir">Not Started</label>
                                <input className="selector" name="bordir" type="radio" value="not_started" defaultChecked={this.state.bordir === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="bordir">Unavailable</label>
                                <input className="selector" name="bordir" type="radio" value="unavailable" defaultChecked={this.state.bordir === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="jahit">Done</label>
                                <input className="selector" name="jahit" type="radio" value="done" defaultChecked={this.state.jahit === "done"} onChange={this.inputHandler} />
                                <label htmlFor="jahit">On Progress</label>
                                <input className="selector" name="jahit" type="radio" value="on_progress" defaultChecked={this.state.jahit === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="jahit">Not Started</label>
                                <input className="selector" name="jahit" type="radio" value="not_started" defaultChecked={this.state.jahit === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="jahit">Unavailable</label>
                                <input className="selector" name="jahit" type="radio" value="unavailable" defaultChecked={this.state.jahit === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <div className="test-radio-form">
                                <span className="radiocontainer">
                                <label htmlFor="finishing">Done</label>
                                <input className="selector" name="finishing" type="radio" value="done" defaultChecked={this.state.finishing === "done"} onChange={this.inputHandler} />
                                <label htmlFor="finishing">On Progress</label>
                                <input className="selector" name="finishing" type="radio" value="on_progress" defaultChecked={this.state.finishing === "on_progress"} onChange={this.inputHandler} />
                                <label htmlFor="finishing">Not Started</label>
                                <input className="selector" name="finishing" type="radio" value="not_started" defaultChecked={this.state.finishing === "not_started"} onChange={this.inputHandler} />
                                <label htmlFor="finishing">Unavailable</label>
                                <input className="selector" name="finishing" type="radio" value="unavailable" defaultChecked={this.state.finishing === "unavailable"} onChange={this.inputHandler} />   
                                </span>
                            </div>
                            <button type="submit" onKeyPress={this.handleKeypress} onClick={()=>{this.props.updateOrder(this.state);this.refreshPage()}}>Update</button>
                        </div>

                    )
        } else {
            return(
                <div className="test-radios">
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
                    <div className="test-text">-</div>
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
                        <div className="test-text">Design</div>
                        <div className="test-text">Potong</div>
                        <div className="test-text">Press</div>
                        <div className="test-text">Sablon</div>
                        <div className="test-text">Bordir</div>
                        <div className="test-text">Jahit</div>
                        <div className="test-text">Finishing</div>
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
    updateOrder
}
    

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager); 
