import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const postData = [
    { id: 1, text: 'hello', likeCount: '3' },
    { id: 2, text: 'i am student', likeCount: '6' }
]

const MyPosts = () => {
    return (
        <div className='Posts'>
            <h2>My posts</h2>
            <NewPost />
            <ul>
                <Post likeCount={postData[0].likeCount} text={postData[0].text} />
                <Post likeCount={postData[1].likeCount} text={postData[1].text} />
            </ul>
        </div>
    )
}

export default MyPosts;