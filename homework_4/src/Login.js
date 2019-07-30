import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <form class="form">
        <input type="text" placeholder="Your Emai" />
        <input type="password" placeholder="Your Password" />
        <input type="submit" value="send" />
      </form>
    );
  }
}
