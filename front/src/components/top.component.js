import React, {Component} from 'react'
import TopConfig from '../configs/top.config';
import { Link, Redirect, Route } from 'react-router-dom'

class Top extends Component{

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
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">França Imóveis</a>
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        {
                            this.state.links.map((link) =>{
                                return (
                                    <li className="nav-item" key={link.id}>
                                        <a className="nav-link" href={link.url} target={link.target} title={link.title}>{link.label}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link className="navbar-brand float-right" to="/logout">{localStorage.getItem('user-name')}</Link>

                {/* <a className="" href={this.props.url}></a> */}
            </nav>
        )
    }
}

export default Top