import React from "react";
import "../../App.css";
import Table from "./Table/Table";
import Autocomplete from './Autocomplete/Autocomplete'
import rapidNinja from '../../assets/rapidNinja.svg'
import styledComponents from 'styled-components'

function Search(props) {

    return (
      <SearchWrapper>
        <div className="autocomplete-wrapper">
          <img src={rapidNinja} width="100" />
          <h3>RapidAPI - IMDB</h3>
          <Autocomplete />
        </div>
        <Table />
      </SearchWrapper>
    );
}

const SearchWrapper = styledComponents.div`
.autocomplete-wrapper {
  width: 350px;
  position: relative;
  display: inline-block;
}

.autocomplete-wrapper > div {
  width: 100%;
}

.autocomplete-wrapper input {
  border: 1px solid #cecece;
  padding: 12px 15px;
  font-size: 14px;
  width: 100%;
}

.autocomplete-wrapper input:focus {
  border-color: #0F67FF;
  box-shadow: none;
  outline: none;
}

.autocomplete-wrapper .dropdown {
  width: 100%;
  padding: 0;
  text-align: left;
  max-height: 280px;
  overflow: hidden;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #0F67FF;
  border-top: none;
}

.autocomplete-wrapper .item  {
  display: block;
  cursor: pointer;
  font-size: 14px;
  padding: 15px;
}

.autocomplete-wrapper .item.selected-item {
  background-color: #0069ff;
  color: #FAFBFC;
}

.autocomplete-wrapper .item:hover {
  background-color: #0069ff;
  color: #FAFBFC;
}
`;

export default Search;
