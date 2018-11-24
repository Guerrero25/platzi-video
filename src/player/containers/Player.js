import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
/* Componets */
import Video from "react-native-video";
import Layout from "../components/PlayerLayout";
import Loader from "../../sections/components/Loader";
import ControlLayout from "../components/ControlLayout";
import PlayPause from "../components/PlayPause";

type Props = {};
class Player extends Component<Props> {
  state = {
    loading: true,
    paused: false
  };

  render() {
    const { loading, paused } = this.state;

    return (
      <Layout
        loading={loading}
        loader={<Loader withIcon text="Cargando..." />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={paused} />
          </ControlLayout>
        }
        video={
          <Video
            style={styles.video}
            resizeMode="cover"
            onLoad={() => this.onBuffer(false)}
            paused={paused}
            source={{
              uri:
                "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
            }}
          />
        }
      />
    );
  }

  onBuffer = isBuffering => {
    this.setState({
      loading: isBuffering
    });
  };

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default connect()(Player);
