import React, { Component } from 'react';
import '../styles/home.template.css';
import Top from '../components/top.component';
import Menu from '../components/menu.component';
import ImoveisAvaliados from '../components/imoveisAvaliados.component';
import UltimasAvalicoes from '../components/ultimasAvaliacoes.component';
import TimeLine from '../boxes/timeline.box';
import $ from 'jquery';
import connection from '../connection';

class App extends Component {

  constructor() {
    super();
    this.state = { user_id: {}, user_name: '', url: '', posts: [], user_auth: '' };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <Top url={this.state.url} />
        <div className="row-fluid">
          <div className="col-sm-12 bg-light">
            <div className="row">
              <Menu />
              <div class="col-sm-10 p-3 bg-light">
                <h1 class="font-weight-light">Painel de Controle</h1>
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
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                        <ImoveisAvaliados data="13/12/10" rua="Arnaldo Piralli 34, Jardim Boa Vista" valor="R$ 130.00" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="row-fluid bg-white">
                      <div class="col-sm-12">
                        <h2 class="font-weight-light">Pontuação</h2>
                        <div class="row mb-3">
                          <div class="col-sm-12">
                            <h2 class="display-3 text-center">4.3</h2>
                          </div>
                        </div>
                        <h2 class="font-weight-light mb-3">Últimas avaliações</h2>
                        <UltimasAvalicoes rua="Arnaldo Piralli 34, Jardim Boa Vista" valoresPositivos="5" valoresNegativos="1" />
                        <UltimasAvalicoes rua="Arnaldo Piralli 34, Jardim Boa Vista" valoresPositivos="5" valoresNegativos="1" />
                        <UltimasAvalicoes rua="Arnaldo Piralli 34, Jardim Boa Vista" valoresPositivos="5" valoresNegativos="1" />
                        <UltimasAvalicoes rua="Arnaldo Piralli 34, Jardim Boa Vista" valoresPositivos="5" valoresNegativos="1" />
                        <UltimasAvalicoes rua="Arnaldo Piralli 34, Jardim Boa Vista" valoresPositivos="5" valoresNegativos="1" />
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
