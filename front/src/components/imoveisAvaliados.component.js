import React, { Component } from 'react'
import TopConfig from '../configs/top.config';
import { Link } from 'react-router-dom'

class ImoveisAvaliados extends Component {

    render() {


        return (
            <div class="row">
                <div class="col-sm-3">
                    {this.props.data}
                </div>
                <div class="col-sm-6">
                    <p>{this.props.rua}</p>
                </div>
                <div class="col-sm-3">
                    <p>{this.props.valor}</p>
                </div>
            </div>
        )
    }
}

export default ImoveisAvaliados