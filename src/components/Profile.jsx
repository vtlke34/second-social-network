import React from "react";

const Profile = () => {
    return <div className='Profile'>
        <img className='folder' src='https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?cs=srgb&dl=pexels-pok-rie-982263.jpg&fm=jpg'></img>
        <div className='information'>
            <img className='profile-logo' src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'></img>
            <div>
                <h2 className='name'>Name Name</h2>
                <ul className='description'>
                    <li>City</li>
                    <li>Age</li>
                    <li>Education</li>
                </ul>
            </div>
        </div>
        <div className='Posts'>
            <h2>My posts</h2>
            <div className='new-post'>new post</div>
            <ul className='p'>
                <li className='post'>post</li>
                <li className='post'>post</li>
                <li className='post'>post</li>
                <li className='post'>post</li>

            </ul>
        </div>
    </div>
}

export default Profile;