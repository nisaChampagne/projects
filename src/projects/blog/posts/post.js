import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import './post.scss'
import moment from 'moment'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class Post extends Component{
    confirmDeletion = () => {
        const {id} = this.props.info

        Swal.fire({
            title: "Delete this one?",
            text: "This action can not be canceled!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, delete",
            cancelButtonText: "No, cancel"
        }).then((result) => {
            if(result.value){
                this.props.deletePost(id)
                Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'Success'
                )
            }
        })
    }

    render(){
        const { id, title,body,category, datestamp} = this.props.info

        return(
            <Paper className="post">
            <p className="post_title" cols="10">
                <b><span className='post-preview'>
                    {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                </span></b>
            </p>
            <Divider light />
                <p className="post_body">
                    <span className='post-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </p>
                <Divider light />
                <p className="post_category"><b>{category}</b></p>
                <Divider light />
                <p className="post_datestamp"><b>{moment(datestamp).fromNow()}</b></p>                
                    <div className="post_button">
                        <ul className="buttons">
                            <li><Link to={`/post/${id}`} className="btn btn-primary"> Show </Link></li>
                            <li><Link to={`/edit/${id}`} className="btn btn-warning"> Edit </Link></li>
                            <li><Link onClick={this.confirmDeletion} className="btn btn-danger">Delete</Link></li>
                        </ul>
                    </div>                   
            </Paper>
        )
    }
}

export default Post;