import * as ActionTypes from './SearchActionTypes';

export const addSearchTag = tag => (
  { type: ActionTypes.ADD_SEARCH_TAG, tag }
);

export const removeSearchTag = tag => (
  { type: ActionTypes.REMOVE_SEARCH_TAG, tag }
);

export const updateSearchTerm = searchTerm => (
  { type: ActionTypes.UPDATE_SEARCH_TERM, searchTerm }
);
