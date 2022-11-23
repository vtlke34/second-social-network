import React from "react"
import style from './Status.module.css'

class Status extends React.Component {
    state = {
        editMode: false,
    }


    activateEdit = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div >
                {
                    this.state.editMode
                        ? <div>
                            <input onBlur={this.deactivateEdit} autoFocus={true} className={style.status} type="text" defaultValue='status' />
                        </div>

                        : <div>
                            <h3 onDoubleClick={this.activateEdit} className={style.status}>status</h3>
                        </div>
                }




            </div>

        )
    }

}

export default Status