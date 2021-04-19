import React,{Component} from 'react';
import './registration.css';
import register from './farmer-reg-logo.png';
import 'semantic-ui-css/semantic.min.css';
import { Button, Image } from 'semantic-ui-react';
import Axios from 'axios';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class registration extends Component{

    
    state = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        cnfPassword:"",
        dob:"",
        gender:"",
        typeOfFarmer:"",
        firstNameError : "",
        lastNameError : "",
        emailError : "",
        passwordError :"",
        cnfpasswordError :"",
        genderError:"",
        typeError:""
    }

    validate = () =>{

        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError ="";
        let cnfpasswordError ="";
        let genderError = "";
        let typeError = "";


        if(!this.state.firstName){
            firstNameError = "please enter a first name"
        }

        if(!this.state.lastName){
            lastNameError = "please enter a last name"
        }

        if(!this.state.password){
            passwordError = "please enter a password"
        }

        if(this.state.password.length < 8){
            passwordError = "please enter a password with aleast length 8"
        }

        if(this.state.password != this.state.cnfPassword){
            cnfpasswordError = "Password does not match"
        }

        if(!this.state.email.includes('@')){
            emailError = "Please enter a valid E-mail address"
        }

        if(this.state.gender.includes('Other') || !this.state.gender){
            genderError = "Please enter a valid gender"
        }

        if(this.state.typeOfFarmer.includes('Other') || !this.state.typeError){
            typeError = "Please enter a valid type"
        }


        if(emailError || firstNameError ||lastNameError || passwordError || cnfpasswordError || genderError ||  typeError){
            this.setState({emailError, firstNameError, lastNameError, passwordError, cnfpasswordError, genderError, typeError});
            return false;
        }

        return true;
    }

    registerClicked = (event) =>{
        console.log("button registration clicked")
        event.preventDefault();

        const isValid = this.validate();

        if (isValid){
            Axios.post('http://localhost:3005/registration', {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password,
            dob : this.state.dob,
            gender : this.state.gender,
            typeOfFarmer : this.state.typeOfFarmer
            }).then(() =>{
                console.log("success!! value inserted!!")
                alert("Data recorded!!  Registration successfull !!")

                               
                });

                this.setState({
                    firstName: "",
                    lastName: "",
                    email:"",
                    password:"",
                    cnfPassword:"",
                    dob: "",
                    gender:"",
                    typeOfFarmer:"",
                    firstNameError : "",
                    lastNameError : "",
                    emailError : "",
                    passwordError :""})

            }
    }

    back = () =>{
        
        this.props.history.push("/login")
        
    }

    render (){
        return(
            <div className='main-contain'>
                <div className="box-1">
                    <h1>Registration page</h1>
                    <form class="ui form">
                        <div class="field">
                            <label>First Name</label>
                            {/* <input onChange={(event) => {this.state.firstName = event.target.value}} placeholder="First Name"/> */}
                            <input onChange={(event) => {this.setState({firstName : event.target.value})}} placeholder="First Name"/>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.firstNameError}
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input onChange={(event) => {this.state.lastName = event.target.value}} placeholder="Last Name"/>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.lastNameError}
                        </div>
                        <div class="field">
                            <label>Email Address</label>
                            <input onChange={(event) => {this.state.email = event.target.value}} placeholder="Email Address"/>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.emailError}
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input onChange={(event) => {this.state.password = event.target.value}} type="password" placeholder="Password"/>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.passwordError}
                        </div>
                        <div class="field">
                            <label>Confirm Password</label>
                            <input onChange={(event) => {this.state.cnfPassword = event.target.value}} type="password" placeholder="Confirm Password"/>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.cnfpasswordError}
                        </div>
                        <div class="field">
                            <label>Date Of Birth</label>
                            {/* <input onChange={(event) => {this.state.dob = event.target.value}}  placeholder="Date Of Birth"/> */}
                            <Datepicker 
                                selected={this.state.dob}
                                onChange={(date) =>{this.setState({dob: date})}} 
                                dateFormat="yyyy/MM/dd"
                            />
                        </div>
                        <div class="field">
                            <label className="text">Gender</label>
                            <select onChange={(event) => {this.state.gender = event.target.value}} name="Gender" className="Gender">
                                <option value="Other">Other</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.genderError}
                        </div>
                        <div class="field">
                            <label className="text">Type Of Farmers</label>
                            <select onChange={(event) => {this.state.typeOfFarmer = event.target.value}} name="farmerType" id="farmerType">
                                <option value="Other">Other</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Arable">Arable</option>
                                <option value="Livestock">Livestock</option>
                                <option value="Mixed farmer">Mixed farmer</option>
                                <option value="Intensive farmer">Intensive farmer</option>
                                <option value="Sedentary farmer">Sedentary farmer</option>
                                <option value="Nomadic farmer">Nomadic farmer</option>
                                <option value="Extensive farmer">Extensive farmer</option>
                                <option value="Subsistence farmer">Subsistence farmer</option>
                                <option value="Pastoral farmer">Pastoral farmer</option>
                                <option value="Medical Farmer">Medical Farmer</option>
                            </select>
                        </div>
                        <div style={{fontSize: 12, color:"red"}}>
                            {this.state.typeError}
                        </div>
                        <button onClick={this.registerClicked}  class="ui button btn">Register</button>  
                        <button onClick={this.back}  class="ui button btn">Back</button>
                    </form><br/>
                    
                </div>
                <div className="box-2"> 
                    
                    <Image className="register-logo"  alt="register pic"  src={register}  />
                </div>
            </div>
        )
    }
}

export default registration;