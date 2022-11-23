import React from "react"
import { useParams } from "react-router-dom"

const withRoute = (Component) => {

    const TakeParams = (props) => {
        let params = useParams()
        return <Component{...props} param={params} />

    }

    return TakeParams
}

export default withRoute