/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
/* Screens */
import Home from "./src/screens/containers/Home";
/* Components */
import Header from "./src/sections/components/Header";
import Video from "react-native-video";
/* Containers */
import SuggestionList from "./src/videos/containers/SuggestionList";
import CategoryList from "./src/videos/containers/CategoryList";
/* Services */
import MovieService from "./src/services/movieService";
import Player from "./src/player/containers/Player";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>I'm the children</Text>
        </Header>
        <Player />
        <Text>buscador</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}
