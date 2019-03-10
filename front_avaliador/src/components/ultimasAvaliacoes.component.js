import React, { Component } from 'react'
import TopConfig from '../configs/top.config';
import { Link } from 'react-router-dom'

class UltimasAvalicoes extends Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-9">
                        <p class="small">{this.props.rua}</p>
                    </div>
                    <div class="col-sm-3">
                    <p><span class="text-success">{this.props.valoresPositivos}</span> | <span class="text-danger">{this.props.valoresNegativos}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UltimasAvalicoes