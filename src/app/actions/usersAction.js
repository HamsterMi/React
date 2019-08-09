import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    dispatch({ type: "FETCH_USERS" });

    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_REJECTED", payload: err });
      });
  };
}


export function fetchUser(id) {
    return function(dispatch) {
      dispatch({ type: "FETCH_USER" });
  
      axios
        .get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data });
        })
        .catch(err => {
          dispatch({ type: "FETCH_USER_REJECTED", payload: err });
        });
    };
  }