import React, { useEffect } from "react";
import style from './BestFriends.module.css'
import Friend from "./Friend/Friend";

const BestFriends = (props) => {

    useEffect(() => {
        props.getFriendsThunk()
    }, [])

    const Friends = props.friendsData.map((el, index) => <Friend name={el.name} id={el.id} imgSrc={el.imgSrc} key={index} />)

    return (
        <div className={style.bestFriends}>
            <h2>Best friends</h2>
            {Friends}
            {/* <div className={style.flex}>
            </div> */}

        </div>
    )
}

export default BestFriends