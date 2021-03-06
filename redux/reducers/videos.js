import {
  SET_CATEGORY_LIST,
  SET_SUGESTION_LIST,
  SET_SELECTED_MOVIE
} from "../constains";
import { combineReducers } from "redux";

function categoryList(state = [], action) {
  switch (action.type) {
    case SET_CATEGORY_LIST:
      return action.payload.categories;

    default:
      return state;
  }
}

function sugestionList(state = [], action) {
  switch (action.type) {
    case SET_SUGESTION_LIST:
      return action.payload.sugestions;

    default:
      return state;
  }
}

function selectedMovie(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_MOVIE:
      return action.payload;

    default:
      return state;
  }
}

export default combineReducers({ categoryList, sugestionList, selectedMovie });
