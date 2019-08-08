import dispatcher from "../dispatcher";
import axios from "axios";

//тут будут ф-ии, выполненении которых будет создавать action
export function addPost(title, userId, body) {
  //должна внутри себя создать actions
  //пусть во время загрузки нам передают id, имя и тело поста
  const action = {
    type: "ADD_POST",
    data: { title, userId, body }
  };
  //диспетчер, давай ты отправишь экшн диспетчеру-?!
  dispatcher.dispatch(action);
}

export function getPosts() {
  //получение данных от сервера
  axios.get("http://jsonplaceholder.typicode.com/posts/").then(response => {
    const action = {
      type: "GET_POSTS",
      data: response.data
    };
    dispatcher.dispatch(action);
  });
}

export function getUsers() {
  //получение данных о пользователях
  axios.get("http://jsonplaceholder.typicode.com/users/").then(response => {
    const action = {
      type: "GET_USERS",
      data: response.data
    };
    dispatcher.dispatch(action);
  });
}
