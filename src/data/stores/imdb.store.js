import {observable, action, computed} from 'mobx'
import {searchMovies, getMovieById} from '../services/imdb.service'
import get from 'lodash/get'
export default observable({
    updateSearchResult: action(async function(searchValue) {
        const searchResult = await searchMovies(searchValue)
        this.searchResult = get(searchResult, 'data.Search', [])
    }),
    setActiveMovie: action(async function(movieID) {
        const movieData = await getMovieById(movieID)
        this.activeMovie = get(movieData, 'data')
    })
})