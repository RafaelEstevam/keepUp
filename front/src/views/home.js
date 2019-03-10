import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import Menu from '../components/menu.component';
import TimeLine from '../boxes/timeline.box';
import $ from 'jquery';
import connection from '../connection'

class App extends Component {

  constructor(){
    super();
    this.state = {user_id:{}, user_name: '', url:'', posts: [], user_auth: ''};
  }

  componentWillMount(){
    this.setState({user_auth: localStorage.getItem('auth-token-id')})
  }

  componentDidMount(){

    $.ajax({
        url:"http://"+connection+":8081/api/posts/" + localStorage.getItem('auth-token-id'),
        dataType: 'json',
        success:function(response){
          if(response.posts.length != 0){
            this.setState({posts:response.posts, user_name: response.user_name, url: response.url});
          }else{
            this.setState({user_name: response.user_name, url: response.url, posts:[{title: 'Nada aqui', favorites: [], comments: [], share: []}]});
          }
        }.bind(this)
      }
    );
  }

  render() {
    
    return (
      <div>
      <Top url={this.state.url}/>
      <div className="row-fluid">
        <div className="col-sm-12 bg-light">
        <div className="row">
            
            <Menu />
            
            <div class="col-sm-10 p-3 bg-light">
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
