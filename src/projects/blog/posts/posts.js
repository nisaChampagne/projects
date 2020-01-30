import React, {Component} from 'react'
import Listing from './listing'
import './post.scss'

class Posts extends Component{
    state={}
    render(){
        return(
            <form className='col-md-10'>
                <legend className='text-center'>Post Listing Page</legend>
                <Listing
                    posts = {this.props.posts}
                    deletePost={this.props.deletePost}
                />
            </form>
        )
    }
}

export default Posts