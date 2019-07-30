import React from "react";

export default class Post extends React.Component {
  render() {
    return (
      <div className="block-item">
        <span className="title">{this.props.title}</span>
        <div>{this.props.postBody}</div>
      </div>
    );
  }
}
