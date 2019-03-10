import React, {Component} from 'react';
import Buttons from './buttons.component'

class Profile extends Component{
    render(){

        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="row">
                            {
                                this.props.posts.map((post) =>{
                                    return (
                                        <div className="col-sm-4" key={post._id}>
                                            <div className="row-fluid shadow-sm">
                                                <div className="col-sm-12">
                                                    <div className="row ">
                                                        <div className="col-sm-12">
                                                            <h4 className="font-weight-light">{post.title}</h4>
                                                        </div>
                                                        {post.img && <img src={post.img} className="img-fluid" style={{height: '200px'}}/>}
                                                        <div className="col-sm-12 mt-3">
                                                            {post.post && <Buttons
                                                                idPost={post._id} 
                                                                nFavorites={post.favorites.length}
                                                                nComments={post.comments.length}
                                                                nShares={post.share.length}
                                                                userName={post.user_name}
                                                            />}
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p><b><a href="#">@{post.user_name}</a></b> {post.post}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile