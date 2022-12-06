import React from "react";
import style from './MyPosts.module.css'
import PostsContainer from "./PostsContainer";
import NewPost from "./NewPost/NewPost";
import { addPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";



const MyPosts = (props) => {
    const onSubmit = (data) => {
        props.addPost(data.newPostText)
        data.newPostText = ''
    }

    return (
        <div className='Posts'>

            <h2 className={style.title}>My posts</h2>

            <NewPost onSubmit={onSubmit} />

            <PostsContainer />

        </div>
    )
}


export default connect(null, { addPost })(MyPosts);