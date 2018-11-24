import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
/* Screens */
import Home from "./screens/containers/Home";
/* Components */
import Header from "./sections/components/Header";
/* Containers */
import SuggestionList from "./videos/containers/SuggestionList";
import CategoryList from "./videos/containers/CategoryList";
import Movie from "./screens/containers/Movie";

class AppLayout extends Component {
  render() {
    const { selectedMovie } = this.props;

    return selectedMovie ? (
      <Movie />
    ) : (
      <Home>
        <Header>
          <Text>I'm the children</Text>
        </Header>
        <Text>buscador</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  };
}

export default connect(mapStateToProps)(AppLayout);
