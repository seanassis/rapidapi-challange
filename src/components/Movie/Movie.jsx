import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import store from "../../data";
import { withRouter } from "react-router";
import get from "lodash/get";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const { imdbStore } = store;
function Movie(props) {
  useEffect(() => {
    if (
      get(imdbStore, "activeMovie.imdbID") !== get(props, "match.params.imdbID")
    ) {
      imdbStore.setActiveMovie(get(props, "match.params.imdbID"));
    }
  }, [get(props, "match.params.imdbID"), imdbStore.activeMovie]);

  const { Title, Year, Runtime } = get(imdbStore, "activeMovie", {});
  return (
    <MovieWrapper>
      <div className="card">{renderContent()}</div>
    </MovieWrapper>
  );

  function renderContent() {
    return (
      imdbStore.activeMovie && (
        <React.Fragment>
          <img
            className="fullheight"
            src={get(imdbStore, "activeMovie.Poster")}
            alt="NO POSTER"
          />
          <div className="container">
            <h4>
              <b>{`Title: ${Title}`}</b>
            </h4>
            <h3>
              <b>{`Year: ${Year}`}</b>
            </h3>
            <h4>
              <b>{`Runtime: ${Runtime}`}</b>
            </h4>
          </div>
        </React.Fragment>
      )
    );
  }
}

const MovieWrapper = styledComponents.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;

.fullheight {
  height:60vh;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}`;

export default withRouter(observer(Movie));
