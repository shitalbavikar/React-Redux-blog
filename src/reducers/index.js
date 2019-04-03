import {combineReducers} from 'redux';
import PostReducers from './postsReducers';
import UserReducers from './userReducers';

export default combineReducers({
    posts: PostReducers,
    users: UserReducers
});