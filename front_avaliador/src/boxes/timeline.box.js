import React, { Component } from 'react';
import TimeLineCard from '../components/timelineCard.component'

class TimeLine extends Component{
    render(){
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-8 offset-sm-2">
                        {
                            this.props.posts.map(function(item){
                                console.log(item)
                                return (
                                    <TimeLineCard
                                        post={item}
                                        nFavorites={item.favorites.length}
                                        nComments={item.comments.length}
                                        nShares={item.share.length}
                                        key={item._id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TimeLine