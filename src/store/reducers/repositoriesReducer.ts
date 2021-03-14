import { ActionTypes } from "../actionTypes";
import { Action } from "../actions";

interface RepositoriesState {
  data: string[];
  error: string | null;
  loading: boolean;
}

const initialState = {
  data: [],
  error: null,
  loading: false
};

const Reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {
        data: [],
        error: null,
        loading: true
      };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false
      };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {
        data: [],
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default Reducer;
