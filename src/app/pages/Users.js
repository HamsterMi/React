import React, { Component } from "react";
import UsersList from "../components/UsersList";

import { Provider } from "react-redux";
import store from "../store";

//здесь будем подключать провайдер
//умным компонентом будет UsersList
//сюда опрокинем стор
export default class Users extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <UsersList />
        </Provider>
      </div>
    );
  }
}
