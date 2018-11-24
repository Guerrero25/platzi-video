import React, { Component } from "react";
import { connect } from "react-redux";
/* Redux's Actions */
import { selectMovie } from "../../../redux/actions/videos";
/* Containers */
import Player from "../../player/containers/Player";
/* Compónents */
import MovieLayout from "../components/MovieLayout";
import Header from "../../sections/components/Header";
import Close from "../../sections/components/Close";
import Details from "../../videos/components/Details";

class Movie extends Component {
  render() {
    const { selectedMovie } = this.props;

    return (
      <MovieLayout>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
        <Details {...selectedMovie} />
      </MovieLayout>
    );
  }

  closeVideo = () => {
    this.props.selectMovie(null);
  };
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  };
}

export default connect(
  mapStateToProps,
  { selectMovie }
)(Movie);
