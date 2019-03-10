import React, {Component} from 'react';
import Buttons from './buttons.component'

class TimeLineCard extends Component{
    render(){

        return(
            <div className="content mb-5">
                <div className="row shadow-sm">
                    <div className="col-12">
                        <h2>{this.props.post.title}</h2>
                    </div>
                    <img src={this.props.post.img} className="img-fluid mx-auto d-block" />
                    <div className="col-12 mt-3">
                        <Buttons nFavorites={this.props.nFavorites} nComments={this.props.nComments} nShares={this.props.nShares}/>
                    </div>
                    <div className="col-12 mt-3">
                        <p><b><a href="#">@{this.props.post.user_name}</a></b> {this.props.post.post}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimeLineCard