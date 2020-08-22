import { combineReducers } from "redux";
import dataReducer, { campaignsReducer } from "./reducer";

// export default combineReducers({
//   dataReducer,
// });

const rootReducer = combineReducers({
  data: dataReducer,
  campaigns: campaignsReducer,
});

export default rootReducer;
