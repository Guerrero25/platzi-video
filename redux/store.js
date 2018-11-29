import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
/* Persist */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  storage,
  key: "root",
  blacklist: ["selectedMovie"]
};

const persistedReducer = persistReducer(persistConfig, reducers);
const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation
);

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
);
const persistor = persistStore(store);

export { store, persistor };
