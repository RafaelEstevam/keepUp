import React, {Component} from 'react'
import TopConfig from '../configs/top.config';
import { Link } from 'react-router-dom'

class Form extends Component{

    render(){


        return(
            <div class="col-sm-12 shadow-sm bg-white rounded-lg mt-3 p-3">
                    <div class="row">
                      <div class="col-sm-2">
                        <img src="https://www.plantapronta.com.br/projetos/140/01.jpg" className="img-fluid" />
                      </div>
                      <div class="col-sm-8">
                        <p>{this.props.label}</p>
                      </div>
                      <div class="col-sm-2">
                        <Link to="/score" className="btn btn-success">Avaliar</Link>
                      </div>
                    </div>
                  </div>  
        )
    }
}

export default Form