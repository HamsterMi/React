import React from "react";
import Post from "./Post";

export default class WelcomeModal extends React.Component {
  render() {
    const posts = this.props.items.map((item, index) => {
      return <Post key={index} title={item.title} postBody={item.postBody} />;
    });

    return <div>{posts}</div>;
  }
}
