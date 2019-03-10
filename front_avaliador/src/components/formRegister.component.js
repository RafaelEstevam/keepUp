import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import JWT from 'jsonwebtoken';
import connection from '../connection'

class FormLogin extends Component{

    constructor(props){
        super(props);
        this.state = {msg:localStorage.getItem('msg-auth'), redirect: false}
        this.state.classInput = 'form-control bg-light border-0 rounded-0'
    }

    login(event){
        event.preventDefault();

        const token = JWT.sign({ 
            user_name: this.username.value,
            email:this.email.value,
            password:this.password.value,
            url: this.username.value,
        },'shhhhh')

        const dataNewUser = {
            method:'POST',
            body:JSON.stringify({
                user_name: this.username.value,
                email:this.email.value,
                password:this.password.value,
                url: this.username.value,
                token: token
            }),
            headers: new Headers({
                'Content-type':'application/json'
            })

        }

        fetch("http://"+connection+":8081/posts", dataNewUser).then( response =>{
            if(response.ok){
                return response.json()
            }
        }).then(token =>{
            if(token.search(" ") == -1){
                localStorage.setItem("user-name", token.user_name)
                localStorage.setItem("auth-token-id", token.token)
            }
            return token
        }).then(token =>{
            if(token.search(" ") == -1){
                this.setState({ redirect: true })
            }else{
                this.setState({msg: token})
            }
        })
        
    }

    render(){
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/home' />;
        }

        return(
            <form className="col-sm-4 offset-sm-4 shadow-sm py-4 border bg-white" onSubmit={this.login.bind(this)}>
                <h2 className="font-weight-light text-center text-primary mb-3"><span className="font-weight-bold">ReactGram</span></h2>
                <span>{this.state.msg}</span>
                <div className="form-group">
                    <input type="input" className={this.state.classInput} id="exampleFormControlInput1" placeholder="Username: " ref={(input) => this.username = input}/>
                </div>
                <div className="form-group">
                    <input type="email" className={this.state.classInput} id="exampleFormControlInput1" placeholder="Email: " ref={(input) => this.email = input}/>
                </div>
                <div className="form-group">
                    <input type="password" className={this.state.classInput} id="exampleFormControlInput2" placeholder="Senha: " ref={(input) => this.password = input} />
                </div>
                <button type="submit" className="btn btn-primary col-sm-12 mb-2">Login</button>
            </form>
        )
    }
}

export default FormLogin