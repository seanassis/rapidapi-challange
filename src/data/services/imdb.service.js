const axios = require('axios')

async function searchMovies(searchValue) {
    const result = await axios.get(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=cdb0f38a`
    );
    return result
}

async function getMovieById(movieId) {
  const result = await axios.get(
    `http://www.omdbapi.com/?i=${movieId}&apikey=cdb0f38a`
  );
  return result
}

export {
    searchMovies,
    getMovieById
}