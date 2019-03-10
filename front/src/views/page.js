import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import Menu from '../components/menu.component';
import TimeLine from '../boxes/timeline.box';
import $ from 'jquery';
import connection from '../connection';

class App extends Component {

  constructor(){
    super();
    this.state = {user_id:{}, user_name: '', url:'', posts: [], user_auth: ''};
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render() {
    
    return (
      <div>
      <Top />
        asdfadf
      </div>
    )
  }
}

export default App;
