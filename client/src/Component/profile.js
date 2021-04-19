import React, {Component} from 'react';
import logo from './farmerLogo.png';
import user from './user1.svg';
import './profile.css';
import 'semantic-ui-css/semantic.min.css';
import { Image, Button} from 'semantic-ui-react';

class profile extends Component {

    state = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        cnfPassword:"",
        dob:"",
        gender:"",
        typeOfFarmer:""
    }

    logout = () =>{
        this.props.history.push("/login")
    }
    

    render(){
        return(
            <div className="main-div">
                <div className="profile-header">
                    <div className="header-text">
                        <div>
                            <Image className='logo' alt="Farmer Connect"  src={logo} size='mini' circular />
                        </div>
                        <div>
                            
                            <h1>Farmer Connect</h1>
                        </div>
                    </div>
                    <div className="header-btn">
                        <Button onClick={this.logout}>Log out</Button>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="content-1">
                        <Image className='logoprofile' alt="Farmer Connect"  src={user} size='small' circular />
                    </div>
                    <div className="content-2">
                        <table>
                            <tr>
                                <td>
                                    <label className="label">First Name</label>
                                </td>
                                <td >
                                    <label className="label">{this.props.match.params.firstName}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">Last Name</label>
                                </td>
                                <td >
                                    <label className="label">{this.props.match.params.lastName}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">Gender</label>
                                </td>
                                <td >
                                    <label className="label">{this.props.match.params.gender}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">Email</label>
                                </td>
                                <td >
                                    <label className="label">{this.props.match.params.email}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">Type Of farmer</label>
                                </td>
                                <td >
                                <label className="label">{this.props.match.params.typeOfFarmer}</label>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="profile-footer">
                    <h3>Welcome to Farmer connect {this.props.match.params.firstName}</h3>
                </div>
            </div>
        )
    }

}

export default profile;