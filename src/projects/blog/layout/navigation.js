import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss';
 
const Navigation = () => {
    return (
        <nav className="col-md-2">
        	<ul>
				<li><div className="sidebar_item"><Link to={'/'}>List All Posts</Link></div></li>
            	<li><div className="sidebar_item" ><Link to={'/create'}>Add New Post</Link></div></li>
            </ul>
        </nav>
     );
}

export default Navigation;