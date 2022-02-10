import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {};

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare, promise),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
const persistor = persistStore(store);

export { store, persistor };
