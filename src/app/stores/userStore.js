import dispatcher from "../dispatcher";
import { EventEmitter } from "events";

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

//   addUsers(users) {
//     // пока не реализую
//   }

  change() {
    this.emit("change");
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case "GET_USERS": {
        this.getUsers(action.data);
        break;
      }
      //потом будет случай добавления пользователя
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions);
export default store;
