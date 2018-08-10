import updateUrl from '../utilities/UrlHelpers';
import * as ActionTypes from './SearchActionTypes';

export const addSearchTag = tag => (
  async (dispatch, getState) => {
    // Lets get the tags, and add them to the URL
    // This will allow for simple sharing and page refreshing
    // Just w/ uglier URLs
    // TODO: seems like overhead to manually manipulate the search object
    // Like this when it's mirrored in the reducer
    // Is there a way to handle post reducer actions??
    const currentSearch = Object.assign(
      {},
      getState().search,
      {
        tags: getState().search.tags,
      },
    );
    currentSearch.tags = Object.assign([], currentSearch.tags);
    currentSearch.tags.push(tag);
    updateUrl(currentSearch);

    dispatch({ type: ActionTypes.ADD_SEARCH_TAG, tag });
  }
);

export const removeSearchTag = tag => (
  async (dispatch, getState) => {
    const currentSearch = Object.assign(
      {},
      getState().search,
      {
        tags: getState().search.tags,
      },
    );
    currentSearch.tags = Object.assign([], currentSearch.tags);
    currentSearch.tags.pop(tag);
    updateUrl(currentSearch);
    dispatch({ type: ActionTypes.REMOVE_SEARCH_TAG, tag });
  }
);

export const updateSearchTerm = searchTerm => (
  async (dispatch, getState) => {
    const currentSearch = Object.assign({}, getState().search);
    currentSearch.searchTerm = searchTerm;
    updateUrl(currentSearch);
    dispatch({ type: ActionTypes.UPDATE_SEARCH_TERM, searchTerm });
  }
);
