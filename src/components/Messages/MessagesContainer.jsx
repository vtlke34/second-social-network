import { connect } from "react-redux"
import { addMessage, inputMessage } from "../../redux/messages-reducer"
import Messages from "./Messages"

const MessagesContainer = (props) => {
    return <Messages {...props} />
}

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage
    }
}

export default connect(mapStateToProps, { addMessage, inputMessage })(MessagesContainer)