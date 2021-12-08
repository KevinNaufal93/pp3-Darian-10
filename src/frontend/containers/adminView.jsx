import React from 'react'
import Axios from 'axios'
import { API_URL } from '../constants/API';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import '../assets/styles/adminPage.css'

class ViewTask extends React.Component {

    state = {
        tasks: ''
    }

    componentDidMount() {
        if(this.props.userGlobal.auth_status === "super_admin" || this.props.userGlobal.auth_status==="admin"){
            this.getTask()
        } else {
            this.redirectHandler();
        }
    }

    getTask = () => {
        Axios.get(API_URL + `/am/`)
        .then((res) => {
           this.setState({tasks:res.data})
        })
        .catch((err) => {
            alert(err);
        });
    }

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    fetchTaskManager = (order_no) => {
        if(this.state.tasks){
            return this.state.tasks.map((val) => {
        return(
            <tr>
                <td className="align-middle">{val.so}</td>
                <td className="align-middle">{val.client}</td>
                <td className="align-middle">{val.product}</td>
                <td className="align-middle">{val.design}</td>
                <td className="align-middle">{val.potong}</td>
                <td className="align-middle">{val.press}</td>
                <td className="align-middle">{val.sablon}</td>
                <td className="align-middle">{val.bordir}</td>
                <td className="align-middle">{val.jahit}</td>
                <td className="align-middle">{val.finishing}</td>
                <td className="align-middle">{val.deadline}</td>
                <td className="align-middle">{val.order_status}</td>
                <td className="align-middle">
                    {
                    this.props.userGlobal.auth_status === "super_admin" ? 
                    <button className="pp3__adm-btn" type="submit">Manage Order</button> : 
                    <p></p>
                    }
                </td>
            </tr>
            )}
        )}
    }

    renderTask = () => {
        if(this.state.tasks){
            
            return this.state.tasks.map((val) => {
                console.log(val.order_no)
                let newDeadline = val.deadline.slice(0,10)

                if(val.design == 'yes') {
                    val.design = '✔'
                } else if(val.design == 'init') {
                    val.design = '❌'
                } else {
                    val.design = '🕒'
                }

                if(val.potong == 'yes') {
                    val.potong = '✔'
                } else if(val.potong == 'init') {
                    val.potong = '❌'
                } else {
                    val.potong = '🕒'
                }

                if(val.press == 'yes') {
                    val.press = '✔'
                } else if(val.press == 'init') {
                    val.press = '❌'
                } else {
                    val.press = '🕒'
                }

                if(val.sablon == 'yes') {
                    val.sablon = '✔'
                } else if(val.sablon == 'init') {
                    val.sablon = '❌'
                } else {
                    val.sablon = '🕒'
                }

                if(val.bordir == 'yes') {
                    val.bordir = '✔'
                } else if(val.bordir == 'init') {
                    val.bordir = '❌'
                } else {
                    val.bordir = '🕒'
                }

                if(val.jahit == 'yes') {
                    val.jahit = '✔'
                } else if(val.jahit == 'init') {
                    val.jahit = '❌'
                } else {
                    val.jahit = '🕒'
                }

                if(val.finishing == 'yes') {
                    val.finishing = '✔'
                } else if(val.finishing == 'init') {
                    val.finishing = '❌'
                } else {
                    val.finishing = '🕒'
                }

                return(
                    <tr>
                        <td>{val.so}</td>
                        <td>{val.client}</td>
                        <td>{val.product}</td>
                        <td>{val.design}</td>
                        <td>{val.potong}</td>
                        <td>{val.press}</td>
                        <td>{val.sablon}</td>
                        <td>{val.bordir}</td>
                        <td>{val.jahit}</td>
                        <td>{val.finishing}</td>
                        <td>{newDeadline}</td>
                        <td>{val.order_status}</td>
                        <td>
                            {
                            this.props.userGlobal.auth_status === "super_admin" ? 
                            <button onClick={this.fetchTaskManager(val.order_no)} className="pp3__adm-btn" type="submit">Manage Order</button> : 
                            <p></p>
                            }
                        </td>
                    </tr>
                    )
            })
        } else {
            return
                (
                <h1>Task is empty</h1>
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
                        <div className="header">Task Overview</div>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">SO Nomor</th>
                                    <th scope="col">Client</th>
                                    <th scope="col">Produk</th>
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
                                {this.renderTask()}
                            </tbody>
                        </table>
                    </div>
                </div>
    }

}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user,
    }
}

export default connect(mapStateToProps)(ViewTask);