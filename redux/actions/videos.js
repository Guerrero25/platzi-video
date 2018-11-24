import { SET_CATEGORY_LIST, SET_SUGESTION_LIST } from "../constains";

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
