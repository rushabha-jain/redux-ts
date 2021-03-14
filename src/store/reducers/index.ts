import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducer = combineReducers({
  repositories: repositoriesReducer
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
