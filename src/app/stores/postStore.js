// в этом хран работа только с постами
//х-ще просто объект
//название хранилища отражает суть: здесь идет работа только с постами

import dispatcher from "../dispatcher";
//спец класс из модуля евент(из коробки)
import { EventEmitter } from "events";

class postStore extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    // !!!???зачем тут биндить
    this.addPost = this.addPost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.change = this.change.bind(this);
    //вроде тут была проблема
    this.handleActions = this.handleActions.bind(this);
  }

  addPost(post) {
    //вместо пуш в массив нужно создават новый массив:новый пост + передать старое
    //не мутировать объекты с данными
    this.posts = [post, ...this.posts];
    this.change();
  }

  change() {
    //спец метод оповещения
    this.emit("change");
  }

  getPosts(posts) {
    //инициализируем посты
    this.posts = posts;
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_POST": {
        this.addPost(action.data);
        break;
      }
      case "GET_POSTS": {
        this.getPosts(action.data);
        break;
      }
    }
  }
}

const store = new postStore();
//register() регистрирует ф-ию, которая будет получать объекты
//нужно передать ф-ю, обрабочик action-ов, объектов, которые будут присылаться
//но мы хотим стору передавать эти данные, чтобы уже стор менял посты
//стор-объект на классе=> добавим метод стору
dispatcher.register(store.handleActions);
export default store;

// {
//     post:||
// }
