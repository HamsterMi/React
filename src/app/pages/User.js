import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersAction";
import UserProfile from "../components/User";

class User extends React.Component {
  render() {
    const { users } = this.props;
    return <div>{<UserProfile {...users} />}</div>;
  }

  componentDidMount() {
    debugger;
    this.props.dispatch(fetchUsers(this.props.match.params.userId));
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(User);
