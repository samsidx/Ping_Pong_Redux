import pingReducer from "./ping.reducer";
import pongReducer from "./pong.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  ping: pingReducer,
  pong: pongReducer
});
