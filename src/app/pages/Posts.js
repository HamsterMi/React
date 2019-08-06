/* export default Posts; */
import React, { Component } from "react";
import PostsList from "../components/PostsList";

import { addPost, getPosts } from "../actions/actionCreators";
import PostStore from "../stores/postStore";

// эта страница отвечает за посты
//тот компонент, в котором будут вызываться функции создающие экшн
export default class Posts extends Component {
  constructor(props) {
    super(props);
    //на основе постов -перерисовка страницы=> нам нужно класть посты в состояние
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
  }
  //добавление поста
  post() {
    //добавление поста, эта функция будет создавать объекты в actions
    const title = "Новый пост";
    const userId = 1;
    const body = "Текст поста";
    addPost(title, userId, body);
  }

  onPostChange() {
    const posts = PostStore.posts;
    this.setState({ posts });
  }

  //когда компонент смотриуется, запрашиваем посты
  componentDidMount() {
    PostStore.on("change", this.onPostChange);
    getPosts();
  }

  componentWillUnmount() {
    PostStore.removeListener("change", this.onPostChange);
  }

  render() {
    return (
      <div>
        <button onClick={this.post} className="bta btn-primary">
          Добавить пост
        </button>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}
