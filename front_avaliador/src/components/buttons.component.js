import React, {Component} from 'react'

class Buttons extends Component{

    constructor(){
        super();
        this.state = {links: []}
    }

    favorite(event){
        console.log(this.props)
        // alert('teste')
    }

    render(){
        return(
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" onClick={this.favorite.bind(this)}/> Favorite {this.props.nFavorites}
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2"/> Comments {this.props.nComments}
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option3"/> Shares {this.props.nShares}
                </label>
            </div>
        )
    }
}

export default Buttons