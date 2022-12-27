import React, { useState, useEffect } from "react"
import style from './Status.module.css'

const Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status || '')


    const activateEdit = () => {
        setEditMode(true)
    }

    const deactivateEdit = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const editStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    return (
        <div >
            {
                editMode
                    ? <input onBlur={deactivateEdit} autoFocus={true} className={style.status} type="text" value={status} onChange={editStatus} />
                    : <div onDoubleClick={activateEdit} className={style.status}>
                        {
                            !props.status
                                ? <p className={style.nostatus}>нет статуса</p>
                                : props.status
                        }
                    </div>
            }

        </div>

    )
}



export default Status