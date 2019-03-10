import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import {Link} from 'react-router-dom';

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
        <div class="row-fluid bg-light">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-6 pt-3 ">
                <div class="mx-auto col-sm-6 mt-5">
                  <h1>Oportunidades em todo lugar</h1>
                  <p>Ganhe o seu dinheiro, dirija no seu tempo e conquiste seus objetivos.</p>
                  <button class="btn btn-primary btn-lg">Cadastre-se</button>
                </div>
              </div>
              <div class="col-sm-6">
                <img src="https://markeninja.com.br/wp-content/uploads/2018/10/176319-corretor-de-imoveis-20-o-que-significa-e-por-que-devo-me-tornar-um.jpg" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
        <section class="container mt-5">
          <div class="row pt-3">
            <div class="col-sm-4">
              <h2 class="font-weight-light mb-3">Ganhe dinheiro com suas avaliações</h2>
              <p class="font-weight-bold">Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla</p>
            </div>
            <div class="col-sm-4">
              <h2 class="font-weight-light mb-3">Acesso a treinamentos para se tornar avaliador</h2>
              <p class="font-weight-bold">Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla</p>
            </div>
            <div class="col-sm-4">
              <h2 class="font-weight-light mb-3">Ganhe prêmios</h2>
              <p class="font-weight-bold">Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla</p>
            </div>
          </div>
        </section>
        <section class="row-fluid bg-light py-5 mt-5">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="display-4">Torne-se Avaliador de Imóveis</h2>
                  </div>
                  <div class="col-sm-4">
                    <button class="btn btn-lg btn-primary col-sm-12 mb-5">Cadastre-se</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="row-fluid bg-dark py-5 pt-5">
          <div class="container">
            <Link to="/" class="text-white">Acesso</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
