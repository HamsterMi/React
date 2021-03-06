import React, { Component } from "react";
import axios from "axios";
import User from "./User";

//npm i axios - библиотке для аджакс запросов
//сервер запрашвиает данные => должен хранить в конструкторе
export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    if (!this.state.users.length) {
      return null;
    }
    //преобразовываем объекты в JSX элементы
    //внимание, как тут использован spread
    const users = this.state.users.map(user => {
        return <User key={user.id}{...user}/>
    });

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users/").then(response => {
      this.setState({ users: response.data });
    });
  }
}
