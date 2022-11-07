import style from './Users.module.css'

const User = (props) => {
    return (
        <li>
            {
                props.userData.followed
                    ? <button>follow</button>
                    : <button>unfollow</button>
            }
            <div>
                <h6>{props.userData.name}</h6>
                <p>location:{`${props.userData.location.country}, ${props.userData.location.city}`}</p>
            </div>
        </li>
    )
}


const Users = (props) => {
    console.log(props)
    return (
        <ul>
            {props.users.map(user => <User userData={user} />)}
        </ul>
    )
}

export default Users