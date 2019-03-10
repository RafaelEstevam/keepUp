import React, {Component} from 'react'
import TopConfig from '../configs/top.config';
import { Link, Redirect, Route } from 'react-router-dom'

class menu extends Component{

    constructor(){
        super();
        this.state = {links: [], redirect: false, redirectTo: ''}
    }

    componentDidMount(){
        this.setState({links: TopConfig.links})
    }

    search(event){
        event.preventDefault();
        this.setState({redirectTo: '/profile/' + this.searchInput.value, redirect: true});
    }

    render(){

        // console.log(this)

        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to={this.state.redirectTo} />;
        // }

        return(
            <div className="col-sm-2 bg-dark">
            <div>
            <Link to="/" className="nav-link">
            Dashboard
            </Link>
            <Link to="/list" className="nav-link">
            Avaliações
            </Link>
            <a className="nav-link" href="#">
            Perfil
            </a>
            </div>
            </div>
        )
    }
}

export default menu