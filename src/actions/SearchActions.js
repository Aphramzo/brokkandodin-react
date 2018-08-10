import updateUrl from '../utilities/UrlHelpers';
import * as ActionTypes from './SearchActionTypes';

const getCurrentStateCopied = state => (
  Object.assign(
    {},
    state.search,
    {
      tags: Object.assign(
        [],
        state.search.tags,
      ),
    },
  )
);

export const addSearchTag = tag => (
  async (dispatch, getState) => {
    // Lets get the tags, and add them to the URL
    // This will allow for simple sharing and page refreshing
    // Just w/ uglier URLs
    // TODO: seems like overhead to manually manipulate the search object
    // Like this when it's mirrored in the reducer
    // Is there a way to handle post reducer actions??
    const currentSearch = getCurrentStateCopied(getState());
    if (currentSearch.tags) {
      currentSearch.tags = [...currentSearch.tags, tag];
    } else {
      currentSearch.tags = [tag];
    }

    updateUrl(currentSearch);

    dispatch({ type: ActionTypes.ADD_SEARCH_TAG, tag });
  }
);

export const removeSearchTag = tag => (
  async (dispatch, getState) => {
    const currentSearch = getCurrentStateCopied(getState());
    currentSearch.tags = currentSearch.tags.filter(currentTag => currentTag !== tag);
    updateUrl(currentSearch);
    dispatch({ type: ActionTypes.REMOVE_SEARCH_TAG, tag });
  }
);

export const updateSearchTerm = searchTerm => (
  async (dispatch, getState) => {
    const currentSearch = getCurrentStateCopied(getState());
    currentSearch.searchTerm = searchTerm;
    updateUrl(currentSearch);
    dispatch({ type: ActionTypes.UPDATE_SEARCH_TERM, searchTerm });
  }
);
