import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import UserHeader from './UserHeader';
import {fetchPostsAndusers} from '../actions';
class PostList extends Component {
componentDidMount(){
    this.props.fetchPostsAndusers();
}

renderList() {
 return this.props.posts.map(post => {
      return (
      <div className="item" Key={post.id} >
            <i className="large middle aligned icon user"/>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId ={post.userId}/>
            </div>
      </div>
      );
  })

}
 render() {
     
     return <div className="ui relaxed divided list">{this.renderList()}</div>
 }
}

const mapStateToProps = (state) => {

    return {posts: state.posts}
}

export default connect(
    mapStateToProps, 
    {fetchPostsAndusers}
    )(PostList);