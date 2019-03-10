import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import connection from '../connection'

class FormLogin extends Component{

    constructor(props){
        super(props);
        this.state = {msg:localStorage.getItem('msg-auth'), redirect: false}
        this.state.classInput = 'form-control bg-light border-0 rounded-0'
    }

    login(event){
        event.preventDefault();

        fetch("http://"+connection+":8081/api/login/" + this.email.value + "/" + this.password.value).then( response =>{
            if(response.ok){
                return response.json();
            }
        }).then(token =>{
            console.log(token)
            if(token.token.search(" ") == -1){
                localStorage.setItem("auth-token-id", token.token)
                localStorage.setItem("user-name", token.user_name)
            }
            return token
        }).then(token =>{
            if(token.token.search(" ") == -1){
                this.setState({ redirect: true })
            }else{
                this.setState({msg: token.token})
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
                <h2 className="font-weight-light text-center text-primary mb-3">Login <span className="font-weight-bold">ReactGram</span></h2>
                <span>{this.state.msg}</span>
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