import React from 'react'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Movie from '../Movie/Movie'
import Search from '../Search/Search'

function Layout(props) {

    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/movie/:imdbID" exact component={Movie} />
          <Route path="/search/:q?" exact component={Search} />
        </BrowserRouter>
      </React.Fragment>
    );
  }

export default Layout