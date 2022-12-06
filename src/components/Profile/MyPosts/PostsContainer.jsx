import { connect } from "react-redux"
import { deletePost } from "../../../redux/profile-reducer"
import Posts from "./Posts"

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}

const PostsContainer = connect(mapStateToProps, { deletePost })(Posts)


export default PostsContainer