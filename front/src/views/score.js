import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import Menu from '../components/menu.component';

class App extends Component {

  constructor(){
    super();
    this.state = {user_id:{}, user_name: '', url:'', posts: [], user_auth: ''};
  }

  componentWillMount(){
    this.setState({user_auth: localStorage.getItem('auth-token-id')})
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
              <div className="col-sm-10 p-3 bg-light">
                <div className="row">
                  <div className="col-sm-10">
                    <h1 className="font-weight-light">Arnaldo Piralli 34, Jardim Boa Vista</h1>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-secondary float-right">Exportar Avaliação</button>
                  </div>
                </div>
                <div className="row-fluid">
                  <div className="col-sm-12 shadow-sm bg-white rounded-lg mt-3 p-3">
                    <h2 className="font-weight-light">Formulário de avaliação</h2>
                    <p>Preencha os dados abaixo para completar a avaliação do imóvel</p>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Hidraulica</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Infiltrações</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Elétrica</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Estrutura</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Gas</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Cobertura</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Cozinha</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Playground</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Piscina</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">Churrasqueira</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>
                        <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-12">
                              <label className="small">Notas do avaliador</label>
                              <textarea placeholder="" className="form-control"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="row-fluid text-center bg-light px-3 pb-3 border">
                          <h2 className="font-weight-light">Pontuação final</h2>
                          <h2 className="text-center display-4">3.8</h2>
                          <button className="btn btn-success col-sm-12">Concluir avaliação</button>
                          <button className="btn btn-primary col-sm-12 mt-3">Solicitar orçamento</button>
                        </div>
                        <div className="row-fluid">

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
