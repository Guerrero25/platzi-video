const BASE_API = "https://yts.am/api/v2/";

class MovieService {
  async getSuggestions(movieId) {
    const request = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${movieId}`
    );
    const { data } = await request.json();

    return data.movies;
  }

  async getMovies() {
    const request = await fetch(`${BASE_API}list_movies.json?`);
    const { data } = await request.json();

    return data.movies;
  }
}

export default new MovieService();
