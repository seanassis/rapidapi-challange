import React, { useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import store from "../../../data";
import {withRouter} from 'react-router'
import debounce from "lodash/debounce";
import get from "lodash/get";

const { imdbStore } = store;
function SearchAutocomplete(props) {
  const [value, setValue] = useState("");

    useEffect(() => {
      const queryParamSearchValue = get(props, "location.search", "").split(
        "?q="
      );
      queryParamSearchValue[1] && setValue(queryParamSearchValue[1]);
    }, []);

  const updateSearchResultDebounced = debounce(async () => {
    imdbStore.updateSearchResult(value);
  }, 500);

  useEffect(() => {
    updateSearchResultDebounced(value);
  }, [value]);

  return (
    <Autocomplete
      value={value}
      items={get(imdbStore, "searchResult", [])}
      getItemValue={item => item.Title}
      shouldItemRender={false}
      renderItem={() => <div></div>}
      onChange={(_, val) => setValue(val || '')}
      onSelect={val => setValue(val || '')}
    />
  );
}

export default withRouter(SearchAutocomplete);
