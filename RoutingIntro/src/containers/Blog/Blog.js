import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    state = {
        auth: false
    }
    
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPosts} /> : null}
                    
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to='posts'/>
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;