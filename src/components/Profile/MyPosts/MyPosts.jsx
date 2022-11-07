import React from "react";
import Post from "./Post/Post";

import style from './MyPosts.module.css'
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./PostsContainer";



const MyPosts = () => {

    return (
        <div className='Posts'>

            <h2 className={style.title}>My posts</h2>

            <NewPostContainer />

            <PostsContainer />

        </div>
    )
}

export default MyPosts;