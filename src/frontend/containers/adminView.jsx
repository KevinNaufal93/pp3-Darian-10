import React from 'react'
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom' 
import { getTask } from "../redux/action/user"; 
import '../assets/styles/adminPage.css'

class ViewTask extends React.Component {

    state = {
        tasks: '',
        order_no: [],
        popupTrigger: false,
    }

    componentDidMount() {
        if(this.props.userGlobal.auth_status === "super_admin" || this.props.userGlobal.auth_status==="admin"){
            this.props.getTask()
            setInterval(this.props.getTask, 5000)
            //console.log(this.props.userGlobal)
        } else {
            this.props.getTask()
            setInterval(this.props.getTask, 5000)
            //this.redirectHandler();
        }
    }

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    renderTask = () => {

        if(this.props.userGlobal.tasks[0]){
            console.log(this.props.userGlobal.tasks.deadline)
            return this.props.userGlobal.tasks.sort(function(a,b){
                console.log(a.deadline)
                var c = new Date(a.deadline.replace(/-/g, '\/').replace(/T.+/, ''));
                var d = new Date(b.deadline.replace(/-/g, '\/').replace(/T.+/, ''));
                return c - d
            }).map((val) => {
                
                const newDeadline = val.deadline.slice(0,10)
                console.log(newDeadline)

                if(val.design === 'done') {
                    val.design = '✔'
                } else if(val.design === 'on_progress') {
                    val.design = '🕒'
                } else if (val.design === 'not_started') {
                    val.design = "-"
                } else {
                    val.design = '❌'
                }

                if(val.potong === 'done') {
                    val.potong = '✔'
                } else if(val.potong === 'on_progress') {
                    val.potong = '🕒'
                } else if (val.potong === 'not_started') {
                    val.potong = "-"
                } else {
                    val.potong = '❌'
                }

                if(val.press === 'done') {
                    val.press = '✔'
                } else if(val.press === 'on_progress') {
                    val.press = '🕒'
                } else if (val.press === 'not_started') {
                    val.press = "-"
                } else {
                    val.press = '❌'
                }

                if(val.sablon === 'done') {
                    val.sablon = '✔'
                } else if(val.sablon === 'on_progress') {
                    val.sablon = '🕒'
                } else if (val.sablon === 'not_started') {
                    val.sablon = "-"
                } else {
                    val.sablon = '❌'
                }

                if(val.bordir === 'done') {
                    val.bordir = '✔'
                } else if(val.bordir === 'on_progress') {
                    val.bordir = '🕒'
                } else if (val.bordir === 'not_started') {
                    val.bordir = "-"
                } else {
                    val.bordir = '❌'
                }

                if(val.jahit === 'done') {
                    val.jahit = '✔'
                } else if(val.jahit === 'on_progress') {
                    val.jahit = '🕒'
                } else if (val.jahit === 'not_started') {
                    val.jahit = "-"
                } else {
                    val.jahit = '❌'
                }

                if(val.finishing === 'done') {
                    val.finishing = '✔'
                } else if(val.finishing === 'on_progress') {
                    val.finishing = '🕒'
                } else if (val.finishing === 'not_started') {
                    val.finishing = "-"
                } else {
                    val.finishing = '❌'
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
                    </tr>
                    )
            })
        } else if (this.props.userGlobal.tasks) {
            return(
                    <tr>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                    <td className="align-middle"> </td>
                </tr>
                )
            }
    }   

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

        return <div className="pp3__adm-base-container">
                    <div className="pp3__adm-content">
                        <div className="pp3__adm-header">Task Overview</div>
                        <table className="table" style={{width:'100%', height:'100%'}}>
                            <thead className="table" style={{backgroundColor: "rgb(140, 55, 151, 0.2)"}} >
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

                    <div className="pp3__adm-btn-container">
                    {
                        this.props.userGlobal.auth_status === "super_admin" ? 
                        <button className="pp3__adm-btn"><Link to="/tm" style={{ textDecoration: 'none', color: 'white' }}>Task Manager</Link></button> : 
                        ""
                    }
                                        {
                        this.props.userGlobal.auth_status === "super_admin" ? 
                        <button className="pp3__adm-btn"><Link to="/ts" style={{ textDecoration: 'none', color: 'white' }}>Edit Task Status</Link></button> : 
                        ""
                    }
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
    getTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);