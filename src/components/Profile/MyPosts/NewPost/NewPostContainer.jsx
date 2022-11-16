import React from "react";
import style from './NewPost.module.css'
import { addPost, inputPost } from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

// const NewPostContainer = (props) => {

//     const inputText = (e) => {

//         const action = inputPostActionCreator
//         action.inputText = e.target.value
//         props.store.dispatch(action)
//     }

//     const addPost = () => {
//         const action = addPostActionCreator;
//         props.store.dispatch(action)
//     }

//     return (
//         <NewPost value={props.store.getState().profilePage.inputData} onChange={inputText} onClick={addPost} />
//     )
// }

const mapProps = (state) => {
    return {
        value: state.profilePage.inputData,
    }
}

const mapDispatch = (dispatch) => {
    return {
        inputText(e) {
            dispatch(inputPost(e.target.value))
        },
        addPost() {
            dispatch(addPost())
        }
    }
}

const NewPostContainer = connect(mapProps, mapDispatch)(NewPost)

export default NewPostContainer;