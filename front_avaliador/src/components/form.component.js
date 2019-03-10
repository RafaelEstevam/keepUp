import React, {Component} from 'react'
import TopConfig from '../configs/top.config';
import { Link } from 'react-router-dom'

class Form extends Component{

    render(){


        return(
            <div className="row-fluid bg-light border p-3 mb-2">
                          <div className="row">
                            <div className="col-sm-9">
                              <label className="small">{this.props.label}</label>
                              <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                              <p className="small m-0">
                                {this.props.text}
                              </p>
                            </div>
                            <div className="col-sm-3">
                              <button className="btn btn-primary">Foto</button>
                            </div>
                          </div>
                        </div>   
        )
    }
}

export default Form