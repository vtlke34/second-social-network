import React from "react";
import { connect } from "react-redux";
import { getFriendsThunk } from "../../redux/sidebar-reducer";
import Navbar from "./Navbar";


const NavbarContainer = (props) => {
    return (
        <Navbar {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}

export default connect(mapStateToProps, { getFriendsThunk })(NavbarContainer);