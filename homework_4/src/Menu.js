import React from "react";
import MenuItem from "./MenuItem";
export default class Menu extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index}>{item}</MenuItem>;
    });
    return <ul>{items}</ul>;
  }
}
