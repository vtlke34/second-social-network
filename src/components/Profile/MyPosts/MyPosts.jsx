import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    const posts = props.store.map(el => <Post likeCount={el.likeCount} text={el.text} />)

    return (
        <div className='Posts'>
            <h2>My posts</h2>
            <NewPost />
            <ul>
                {posts}
            </ul>
        </div>
    )
}

export default MyPosts;