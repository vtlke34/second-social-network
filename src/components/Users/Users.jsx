import axios from 'axios'
import { NavLink } from 'react-router-dom'
import api from '../../api/api'
import Preloader from '../Common/Preloader'
import style from './Users.module.css'

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.count)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.page;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 4;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={style.users}>

            <div className={style.pages}>
                {slicedPages.map(i =>
                    <span onClick={() => { props.setCurPage(i) }} className={props.page == i ? style.activePage : style.page} key={i}>
                        {i + ' '}
                    </span>)}
            </div>

            {props.isFetching === true
                ? <Preloader />
                : <ul >
                    {props.usersData.map(user => {
                        return (
                            <li key={user.id} className={style.user}>
                                <NavLink to={`/profile/${user.id}`}>
                                    {
                                        user.photos.small === null
                                            ? <img className={style.logo} src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' alt="" />
                                            : <img className={style.logo} src={user.photos.small} alt="" />
                                    }
                                </NavLink>

                                <div>
                                    <h6 className={style.name}>{user.name}</h6>
                                    {
                                        user.followed
                                            ? <button disabled={props.isFollowing.includes(user.id)} className={style.unfollow} onClick={() => {
                                                props.unfollowProcess(user.id)
                                            }}
                                            >Unfollow</button>

                                            : <button disabled={props.isFollowing.includes(user.id)} className={style.follow} onClick={() => {
                                                props.followProcess(user.id)
                                            }}
                                            >Follow</button>
                                    }
                                </div>
                            </li>)
                    })
                    }
                </ul >
            }


        </div >
    )
}

export default Users