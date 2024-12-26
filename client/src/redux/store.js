// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools/extension";

// import thunk from "redux-thunk";
// import { carsReducer } from "./reducers/carsReducer";
// import { alertsReducer } from "./reducers/alertsReducer";

// const composeEnhancers = composeWithDevTools({});

// const rootReducer = combineReducers({
//   carsReducer,
//   alertsReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk) // Correct usage: pass thunk directly
//   )
// );

// export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertsReducer } from "./reducers/alertsReducer";
import { carsReducer } from "./reducers/carsReducer";
import { bookingsReducer } from "./reducers/bookingsReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  carsReducer,
  alertsReducer,
  bookingsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
