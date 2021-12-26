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
            //console.log(this.props.userGlobal)
        } else {
            this.redirectHandler();
        }
    }

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    renderTask = () => {

        if(this.props.userGlobal.tasks[0]){
            return this.props.userGlobal.tasks.map((val) => {
                //console.log(val.order_no)
                const newDeadline = val.deadline.slice(0,10)

                if(val.design === 'yes') {
                    val.design = '✔'
                } else if(val.design === 'init') {
                    val.design = '❌'
                } else {
                    val.design = '🕒'
                }

                if(val.potong === 'yes') {
                    val.potong = '✔'
                } else if(val.potong === 'init') {
                    val.potong = '❌'
                } else {
                    val.potong = '🕒'
                }

                if(val.press === 'yes') {
                    val.press = '✔'
                } else if(val.press === 'init') {
                    val.press = '❌'
                } else {
                    val.press = '🕒'
                }

                if(val.sablon === 'yes') {
                    val.sablon = '✔'
                } else if(val.sablon === 'init') {
                    val.sablon = '❌'
                } else {
                    val.sablon = '🕒'
                }

                if(val.bordir === 'yes') {
                    val.bordir = '✔'
                } else if(val.bordir === 'init') {
                    val.bordir = '❌'
                } else {
                    val.bordir = '🕒'
                }

                if(val.jahit === 'yes') {
                    val.jahit = '✔'
                } else if(val.jahit === 'init') {
                    val.jahit = '❌'
                } else {
                    val.jahit = '🕒'
                }

                if(val.finishing === 'yes') {
                    val.finishing = '✔'
                } else if(val.finishing === 'init') {
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
                    </tr>
                    )
            })
        } else if (this.props.userGlobal.tasks) {
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

                    {
                        this.props.userGlobal.auth_status === "super_admin" ? 
                        <button className="pp3__adm-btn"><Link to="/tm">Manage Order</Link></button> : 
                        ""
                    }

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