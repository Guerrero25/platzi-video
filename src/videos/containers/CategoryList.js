import React, { Component } from "react";
import { FlatList } from "react-native";
/* Componets */
import Layout from "../components/ListLayout";
import EmptyList from "../components/EmptyList";
import HorizontalSeparator from "../../sections/components/HorizontalSeparator";
import Category from "../components/Categoty";
import Loader from "../../sections/components/Loader";
/* Redux */
import { connect } from "react-redux";
import { setCategoryList } from "../../../redux/actions/videos";
/* Services */
import MovieService from "../../services/movieService";

type Props = {};
class CategoryList extends Component<Props> {
  state = {
    loading: true
  };

  async componentDidMount() {
    const categories = await MovieService.getMovies();

    this.props.setCategoryList(categories);

    this.setState({
      loading: false
    });
  }

  render() {
    const { categoryList } = this.props;

    return (
      <Layout
        title="Categorias"
        background={require("../../assets/background.png")}
      >
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={categoryList}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}
          ListEmptyComponent={this.renderEmpty}
        />
      </Layout>
    );
  }

  renderEmpty = () =>
    this.state.loading ? (
      <Loader withIcon text="Cargando categorias..." />
    ) : (
      <EmptyList text="No hay sugerencias que mostrar T-T" />
    );

  itemSeparator = () => <HorizontalSeparator />;

  renderItem = ({ item }) => <Category {...item} />;

  keyExtractor = item => `${item.id}`;
}

function mapStateToProps(state) {
  return {
    categoryList: state.videos.categoryList
  };
}

export default connect(
  mapStateToProps,
  { setCategoryList }
)(CategoryList);
