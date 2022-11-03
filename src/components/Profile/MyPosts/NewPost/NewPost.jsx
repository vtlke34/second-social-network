import React from "react";
import style from './NewPost.module.css'

const NewPost = () => {
    return (
        <div className="NewPost">
            <textarea className={style.text} placeholder="новый пост"></textarea>
            <div>
                <button>отправить</button>
            </div>
        </div>
    )
}

export default NewPost;