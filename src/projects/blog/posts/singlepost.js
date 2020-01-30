import React, { Component } from 'react';
import moment from 'moment';
 
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import renderHTML from 'react-render-html';

class SinglePost extends Component{
    showPost = (props) => {
        if (!props.post) return null;
 
        const {title, author, body, category, datestamp} = this.props.post;

        return(
            <React.Fragment>
                <Paper className='single_post'>
                    <h4>Title: {title}</h4>
                    <Divider light />
                    <p><b>Author: </b>{author}</p>
                    <Divider light />
                    <p><b>Content:</b> {body}</p>
                    <Divider light />
                    <p><b>Category:</b> {category}</p>
                    <Divider light />
                    <h5>Create At: {moment(datestamp).format('DD MM YYYY')}</h5>
                    <div style={{ width: '60%' }}>{renderHTML(body)}</div>
                </Paper>
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className='col-md-10'>
                {this.showPost(this.props)}
            </div>
        )
    }
}

export default SinglePost;