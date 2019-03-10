import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import Menu from '../components/menu.component';

class App extends Component {

  constructor() {
    super();
    this.state = { user_id: {}, user_name: '', url: '', posts: [], user_auth: '' };
  }

  componentWillMount() {
    this.setState({ user_auth: localStorage.getItem('auth-token-id') })
  }

  componentDidMount() {
  }

  render() {

    return (
      <div><Top/><Menu/></div>
    )
  }
}

export default App;
