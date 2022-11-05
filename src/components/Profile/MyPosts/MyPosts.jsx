import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import style from './MyPosts.module.css'

const MyPosts = (props) => {

    const posts = props.state.postData.map((el, index) => <Post name={el.name} likeCount={el.likeCount} text={el.text} key={index} />)

    return (
        <div className='Posts'>

            <h2 className={style.title}>My posts</h2>

            <NewPost inputData={props.state.inputData} dispatch={props.dispatch} />

            <ul>
                {posts}
            </ul>

        </div>
    )
}

export default MyPosts;