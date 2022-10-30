import React from "react";

const NewPost = () => {
    return (
        <div className="NewPost">
            <textarea placeholder="новый пост"></textarea>
            <div>
                <button>отправить</button>
            </div>
        </div>
    )
}

export default NewPost;