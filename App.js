/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
/* Screens */
import Home from "./src/screens/containers/Home";
/* Components */
import Header from "./src/sections/components/Header";
/* Containers */
import SuggestionList from "./src/videos/containers/SuggestionList";
import CategoryList from "./src/videos/containers/CategoryList";
import Player from "./src/player/containers/Player";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home>
            <Header>
              <Text>I'm the children</Text>
            </Header>
            <Player />
            <Text>buscador</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
