import axios from "axios";

const initialState = {
  user: {},
  posts: []
};

const LOGIN_USER = "LOGIN_USER";
const GET_POSTS = "GET_POSTS";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const REGISTER_USER = "REGISTER_USER";

export default function reducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${LOGIN_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });
    case `${REGISTER_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}
export function registerUser(username, password) {
  return {
    type: REGISTER_USER,
    payload: axios
      .post(`/api/auth/register`, { username, password })
      .then(response => {
        return response.data[0];
      })
  };
}

export function loginUser(username, password) {
  return {
    type: LOGIN_USER,
    payload: axios
      .post(`/api/auth/login`, { username, password })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}
