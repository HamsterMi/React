import React, { Component } from "react";
// import { Link } from "react-router";

export default class Post extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <h3 className="card-header">{this.props.title}</h3>
        <div className="card-body text-secondary">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}