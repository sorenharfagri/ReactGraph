import { combineReducers } from "redux";
import { graphReducer } from "./reducers/graph.reducer";

export const rootReducer = combineReducers({
    graph: graphReducer
});