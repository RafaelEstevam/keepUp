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
      <Top url={this.state.url}/>
      <div className="row-fluid">
        <div className="col-sm-12 bg-light">
        <div className="row">
            <Menu />
            <div class="col-sm-10 p-3 bg-light">
              <h1 class="font-weight-light">Dashboard</h1>
              <div class="row">
                <div class="col-sm-8">
                  <div class="row-fluid bg-white">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="font-weight-light">Extrato</h2>
                        <h1 class="text-center display-3">R$ 1300.00</h1>
                      </div>
                    </div>
                  </div>
                  <div class="row-fluid bg-white">
                    <div class="col-sm-12">
                      <h3 class="font-weight-light">Imóveis avaliados</h3>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          13/12/10
                        </div>
                        <div class="col-sm-6">
                          <p>Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p>R$ 130.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="row-fluid bg-white">
                    <div class="col-sm-12">
                      <h2 class="font-weight-light">Score</h2>
                      <div class="row mb-3">
                        <div class="col-sm-12">
                          <h2 class="display-3 text-center">4.3</h2>
                        </div>
                      </div>
                      <h2 class="font-weight-light">Últimas avaliações</h2>
                      <div class="row mt-3">
                        <div class="col-sm-9">
                          <p class="small">Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p><span class="text-success">5</span> | <span class="text-danger">1</span></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-9">
                          <p class="small">Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p><span class="text-success">5</span> | <span class="text-danger">1</span></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-9">
                          <p class="small">Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p><span class="text-success">5</span> | <span class="text-danger">1</span></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-9">
                          <p class="small">Arnaldo Piralli 34, Jardim Boa Vista</p>
                        </div>
                        <div class="col-sm-3">
                          <p><span class="text-success">5</span> | <span class="text-danger">1</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
