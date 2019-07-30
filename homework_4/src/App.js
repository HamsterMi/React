import React from "react";
import ReactDOM from "react-dom";
import "./app/styles/styles.css";

import Blog from "./app/components/Blog";
import WelcomeModal from "./app/components/WelcomeModal";

class App extends React.Component {
  render() {
    const menuItems = [
      {
        title: "Lorem ipsum",
        postBody:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione deleniti neque dignissimos harum ipsum facere dicta facilis ut vel impedit tempore, saepe asperiores culpa explicabo? Atque, voluptates vero beatae dolorum laborum molestiae? Amet eaque minima blanditiis! Voluptate, nihil sunt ipsam molestias amet obcaecati tempora nobis dolores repudiandae numquam expedita architecto incidunt dolore. Asperiores odit dignissimos corrupti dolorum quia enim voluptates aliquid numquam maxime voluptatum omnis facere odio quos, provident unde repudiandae sed ea id! Quisquam, alias consequatur natus fugiat eum nobis accusamus. Temporibus dolorum iure cumque alias labore officia rerum, obcaecati maxime recusandae, ipsa consequuntur possimus voluptatibus? Itaque, sint."
      },
      {
        title: "Lorem ipsum",
        postBody:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione deleniti neque dignissimos harum ipsum facere dicta facilis ut vel impedit tempore, saepe asperiores culpa explicabo? Atque, voluptates vero beatae dolorum laborum molestiae? Amet eaque minima blanditiis! Voluptate, nihil sunt ipsam molestias amet obcaecati tempora nobis dolores repudiandae numquam expedita architecto incidunt dolore. Asperiores odit dignissimos corrupti dolorum quia enim voluptates aliquid numquam maxime voluptatum omnis facere odio quos, provident unde repudiandae sed ea id! Quisquam, alias consequatur natus fugiat eum nobis accusamus. Temporibus dolorum iure cumque alias labore officia rerum, obcaecati maxime recusandae, ipsa consequuntur possimus voluptatibus? Itaque, sint."
      },
      {
        title: "Lorem ipsum",
        postBody:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione deleniti neque dignissimos harum ipsum facere dicta facilis ut vel impedit tempore, saepe asperiores culpa explicabo? Atque, voluptates vero beatae dolorum laborum molestiae? Amet eaque minima blanditiis! Voluptate, nihil sunt ipsam molestias amet obcaecati tempora nobis dolores repudiandae numquam expedita architecto incidunt dolore. Asperiores odit dignissimos corrupti dolorum quia enim voluptates aliquid numquam maxime voluptatum omnis facere odio quos, provident unde repudiandae sed ea id! Quisquam, alias consequatur natus fugiat eum nobis accusamus. Temporibus dolorum iure cumque alias labore officia rerum, obcaecati maxime recusandae, ipsa consequuntur possimus voluptatibus? Itaque, sint."
      }
    ];

    const modalItems = {
      title: "Lorem ipsum",
      modalBody:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione deleniti neque dignissimos harum ipsum facere dicta facilis ut vel impedit tempore, saepe asperiores culpa explicabo? Atque, voluptates vero beatae dolorum laborum molestiae? Amet eaque minima blanditiis! Voluptate, nihil sunt ipsam molestias amet obcaecati tempora nobis dolores repudiandae numquam expedita architecto incidunt dolore. Asperiores odit dignissimos corrupti dolorum quia enim voluptates aliquid numquam maxime voluptatum omnis facere odio quos, provident unde repudiandae sed ea id! Quisquam, alias consequatur natus fugiat eum nobis accusamus. Temporibus dolorum iure cumque alias labore officia rerum, obcaecati maxime recusandae, ipsa consequuntur possimus voluptatibus? Itaque, sint.",
      buttonTitle: "close"
    };

    return (
      <div>
        <Blog items={menuItems} />
        <WelcomeModal items={modalItems} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
