import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import RootReducer from "./Reducers/rootReducer";

const middlewares = [reduxThunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
