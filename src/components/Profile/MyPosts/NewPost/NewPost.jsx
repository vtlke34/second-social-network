import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validator";
import TextareaFormComponent from "../../../Common/TextareaFormComponent";
import style from './NewPost.module.css'

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.newPost}>

            <Field
                component={TextareaFormComponent}
                className={style.text}
                placeholder="Введите новый пост..."
                name='newPostText'
                validate={[required]}
            />

            <button type="submit" className={style.button} >Отправить</button>

        </form>
    )
}

export default reduxForm({ form: 'newPost' })(NewPost);