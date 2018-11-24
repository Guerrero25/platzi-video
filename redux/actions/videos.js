import {
  SET_CATEGORY_LIST,
  SET_SUGESTION_LIST,
  SET_SELECTED_MOVIE
} from "../constains";

export function setCategoryList(categories) {
  return {
    type: SET_CATEGORY_LIST,
    payload: {
      categories
    }
  };
}

export function setSugestionList(sugestions) {
  return {
    type: SET_SUGESTION_LIST,
    payload: {
      sugestions
    }
  };
}

export function selectMovie(movie) {
  return {
    type: SET_SELECTED_MOVIE,
    payload: movie
  };
}
