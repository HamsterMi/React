import axios from "axios";

export function fetchUsers(id) {
  return function(dispatch) {
    console.log(id);

    let path = id
      ? `http://jsonplaceholder.typicode.com/users/${id}`
      : "http://jsonplaceholder.typicode.com/users";

    dispatch({ type: "FETCH_USERS" });

    axios
      .get(path)
      .then(response => {
        dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_REJECTED", payload: err });
      });
  };
}
