import React from "react";
import User from "./User";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersAction";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
    const mappedUsers = users.map(user => {
      return <User key={user.id} {...user} />;
    });
    return (
      <div>
        <h1>Пользователи</h1>
        {mappedUsers}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}
export default connect(mapStateToProps)(UsersList);


