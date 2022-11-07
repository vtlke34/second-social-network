import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
    console.log(props)
    return (
        <ul>
            {props.postData.map(postData => <Post postData={postData} />)}
        </ul>
    )
}

export default Posts;