import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
/* Services */
import movieService from "../../services/movieService";
import { selectMovie } from "../../../redux/actions/videos";

class Seacrh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Busca tu pelicula favorita"
        underlineColorAndroid="transparent"
        onSubmitEditing={() => this.handleSubmit()}
        onChangeText={text => this.setState({ text })}
      />
    );
  }

  async handleSubmit() {
    const { text } = this.state;
    const { selectMovie } = this.props;
    const movies = await movieService.searchMovie(text);

    selectMovie(movies[0]);
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#eaeaea"
  }
});

export default connect(
  null,
  { selectMovie }
)(Seacrh);
