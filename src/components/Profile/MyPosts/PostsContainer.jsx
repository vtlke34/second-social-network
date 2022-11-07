import { connect } from "react-redux"
import Posts from "./Posts"

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

// const posts = props.store.getState().profilePage.postData.map((el, index) => <Post name={el.name} likeCount={el.likeCount} text={el.text} key={index} />)
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer