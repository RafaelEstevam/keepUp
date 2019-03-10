import React, { Component } from 'react'
import TopConfig from '../configs/top.config';
import { Link } from 'react-router-dom'

class Top extends Component {

    constructor() {
        super();
        this.state = { links: [], redirect: false, redirectTo: '' }
    }

    componentDidMount() {
        this.setState({ links: TopConfig.links })
    }

    search(event) {
        event.preventDefault();
        this.setState({ redirectTo: '/profile/' + this.searchInput.value, redirect: true });
    }

    render() {

        // console.log(this)

        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to={this.state.redirectTo} />;
        // }

        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to="/">
                    <a className="navbar-brand" href="#">França Imóveis</a>
                </Link>
            </nav>
        )
    }
}

export default Top