import React, { Component } from "react";
import { connect } from "react-redux";
import { Animated } from "react-native";
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
  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, { toValue: 1, duration: 1000 }).start();
  }

  render() {
    const { selectedMovie } = this.props;
    const { opacity } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: opacity
        }}
      >
        <MovieLayout>
          <Header>
            <Close onPress={this.closeVideo} />
          </Header>
          <Player />
          <Details {...selectedMovie} />
        </MovieLayout>
      </Animated.View>
    );
  }

  closeVideo = () => {
    this.props.selectMovie(null);
  };
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.videos.selectedMovie
  };
}

export default connect(
  mapStateToProps,
  { selectMovie }
)(Movie);
