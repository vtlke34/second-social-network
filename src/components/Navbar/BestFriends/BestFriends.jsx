import React from "react";
import style from './BestFriends.module.css'
import Friend from "./Friend/Friend";

const BestFriends = (props) => {

    const Friends = props.bestFriends.bestFriendsData.map(el => <Friend name={el.name} id={el.id} imgSrc={el.imgSrc} />)

    return (
        <div className={style.bestFriends}>
            <h2>Best friends</h2>
            <div className={style.flex}>
                {Friends}
            </div>

        </div>
    )
}

export default BestFriends