import React, { Component, Fragment } from "react";
/* Components */
import Header from "../../sections/components/Header";
/* Containers */
import SuggestionList from "../../videos/containers/SuggestionList";
import CategoryList from "../../videos/containers/CategoryList";
import Seacrh from "../../sections/containers/Seacrh";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Seacrh />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    );
  }
}

export default Home;
