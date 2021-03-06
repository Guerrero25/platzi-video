import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
/* Componets */
import Layout from "../components/ListLayout";
import EmptyList from "../components/EmptyList";
import VerticalSeparator from "../../sections/components/VerticalSeparator";
import Suggestion from "../components/Suggestion";
import Loader from "../../sections/components/Loader";
/* Redux */
import { connect } from "react-redux";
import { setSugestionList, selectMovie } from "../../../redux/actions/videos";
/* Services */
import MovieService from "../../services/movieService";

type Props = {};
class SuggestionList extends Component<Props> {
  state = {
    loading: true
  };

  async componentDidMount() {
    const movies = await MovieService.getSuggestions(9);

    this.props.setSugestionList(movies);

    this.setState({
      loading: false
    });
  }

  render() {
    const { sugestionList } = this.props;

    return (
      <Layout title="Recomendados para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={sugestionList}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}
          ListEmptyComponent={this.renderEmpty}
        />
      </Layout>
    );
  }

  renderEmpty = () => {
    const { loading } = this.state;

    return loading ? (
      <Loader withIcon text="Espera estamos cargando las sugerencias ..." />
    ) : (
      <EmptyList text="No hay sugerencias que mostrar T-T" />
    );
  };

  itemSeparator = () => <VerticalSeparator />;

  renderItem = ({ item }) => (
    <Suggestion {...item} onPress={() => this.viewMovie(item)} />
  );

  keyExtractor = item => `${item.id}`;

  viewMovie = item => {
    this.props.selectMovie(item);
  };
}

function mapStateToProps(state) {
  return {
    sugestionList: state.videos.sugestionList
  };
}

export default connect(
  mapStateToProps,
  { setSugestionList, selectMovie }
)(SuggestionList);
