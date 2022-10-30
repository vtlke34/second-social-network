import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
        <div className='Posts'>
            <h2>My posts</h2>
            <NewPost />
            <ul>
                <Post likeCount='1' text='hello' />
                <Post likeCount='5' text='i am student' />

            </ul>
        </div>
    )
}

export default MyPosts;