import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
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
              <h1 className="display-4"></h1>
              <form className="col-sm-10 offset-sm-1">
                <div className="row no-gutters">
                  <input className="form-control col-sm-3" />
                  <input className="form-control col-sm-6" />
                  <input className="form-control col-sm-3" />
                </div>
                <button className="btn btn-success">Buscar</button>
              </form>
            </div>
            
            {/* <img src="#" /> */}
          </div>
        </div>
        <div className="container bg-light">
          <div className="row-fluid">
            <div className="col-sm-12">
                
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
