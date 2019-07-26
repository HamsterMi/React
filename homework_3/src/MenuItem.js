import React from "react";

export default class MenuItem extends React.Component{
    render(){
        return(
            <li>
            <a href={this.props.children.href}>{this.props.children.title}</a>
          </li>
        )

    }
}
