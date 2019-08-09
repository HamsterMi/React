import React, { Component } from "react";
import UserProfile from "../components/User";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersAction";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return <div>{<UserProfile {...user} />}</div>;
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers(this.props.params.userId));
    console.log(this.props.params.userId);
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}
export default connect(mapStateToProps)(User);
