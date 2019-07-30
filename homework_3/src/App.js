import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Menu from "./Menu";

class App extends React.Component {
  render() {
    const menuItems = [
      { title: "Главная", href: "/" },
      { title: "О нас", href: "/about" },
      { title: "Услуги", href: "/service" },
      { title: "Контакты", href: "/contacts" }
    ];
    return (
      <div>
        <Menu items={menuItems} />
        <Login />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
