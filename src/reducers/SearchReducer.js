import * as ActionTypes from '../actions/SearchActionTypes';

export default (state = { tags: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SEARCH_TAG:
      return {
        ...state,
        tags: [...state.tags, action.tag],
      };

    case ActionTypes.REMOVE_SEARCH_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.tag),
      };

    case ActionTypes.UPDATE_SEARCH_TERM:
      return Object.assign(
        {},
        state,
        {
          searchTerm: action.searchTerm,
        },
      );

    default:
      return state;
  }
};
