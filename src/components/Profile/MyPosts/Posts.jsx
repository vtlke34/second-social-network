import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <ul>
            {props.postData.map(postData => <Post postData={postData} deletePost={props.deletePost} key={postData.text} />)}
        </ul>
    )
}

export default Posts;