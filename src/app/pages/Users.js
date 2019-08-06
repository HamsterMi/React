import React, { Component } from "react";
import UsersList from "../components/UsersList";
import { getUsers } from "../actions/actionCreators";
import UserStore from "../stores/userStore";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onUserChange = this.onUserChange.bind(this);
  }

  // user() {
  //   //добавление нового поль-ля
  //   //пока не нужно
  // }

  onUserChange() {
    const users = UserStore.users;
    this.setState({ users });
  }

  componentDidMount() {
    console.log("mount");
    UserStore.on("change", this.onUserChange);
    getUsers();
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.onUserChange);
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
