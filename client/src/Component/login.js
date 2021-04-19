import React, {Component} from 'react';
import './login.css' ;
import logo from './farmer-login-logo.jpeg';
import 'semantic-ui-css/semantic.min.css';
import { Form, Image, Input } from 'semantic-ui-react';
import Axios from 'axios';


class login extends Component {

    state = {
        iemail: '',
        ipassword:'',
        iemailError: '',
        user:[
            {firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob:'',
            gender:'',
            typeOfFarmer: ''}
        ],
    }

    validate = () =>{
        let iemailError = "";
        
        if(!this.state.iemail.includes('@')){
            iemailError = "Please enter a valid E-mail address"
        }

        if(iemailError  ){
            this.setState({iemailError});
            return false;
        }
        return true;
    }

    loginClicked = () => {
        console.log(this.state.iemail);
        console.log(this.state.ipassword)

        const isValid = this.validate();

        if(isValid) {
            Axios.post('http://localhost:3005/login', {
            username : this.state.iemail,
            password : this.state.ipassword,
            }).then((response) =>{
                console.log(response.data);

                if(response.data[0]){
                    console.log("login successfull!!")
                    this.props.history.push(`/profile/${response.data[0].id}/${response.data[0].firstName}/${response.data[0].lastName}/${response.data[0].email}/${response.data[0].gender}/${response.data[0].typeOfFarmer}`)
                }else{
                    alert("Wrong combination of username/password !!")
                }
                
            });
            this.setState({
                iemailError:""})
        }        
    }

    signupClicked = () => {
        this.props.history.push("/registration")
    }

    render() {
        return(
            <div className="main-container">
                <Form>
                    <Image className='logo' alt="Farmer Connect"  src={logo} size='small' circular />
                    <h2 className='text-desc'>Farmer Connect</h2>
                    <h4 className='text-desc'>Connecting different farmers all over the world!!</h4>
                    <Form.Field>
                        <label className="label">User Id</label>
                        <Input icon='user' onChange={(event) => {this.setState({iemail : event.target.value})}} 
                        iconPosition='left' 
                        placeholder='User Id' />
                    </Form.Field>
                    <div style={{fontSize: 12, color:"red"}}>
                        {this.state.iemailError}
                    </div>
                    <Form.Field>
                        <label className="label">Password</label>
                        <Input icon='lock' onChange={(event) => {this.setState({ipassword : event.target.value})}} 
                        type='password' 
                        iconPosition='left' 
                        placeholder='Password' />
                    </Form.Field>
                    
                    <button className="ui primary button " onClick={this.loginClicked} 
                    type='Log-in'>Log-in</button>
                    <button className="ui secondary button " onClick={this.signupClicked} 
                    type='Sign-up'>Sign-up</button>
                </Form>
            </div>
        )
    }
}

export default login;