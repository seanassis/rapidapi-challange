import React from "react";
import styledComponents from "styled-components";
import store from "../../../data";
import { observer } from "mobx-react-lite";
import get from "lodash/get";
import { Link } from "react-router-dom";
const { imdbStore } = store;

function Table(props) {

  return (
    <TableWrapper>
      <h2>Search Result:</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderResultContent()}</tbody>
        </table>
      </div>
    </TableWrapper>
  );

    function renderResultContent() {
      return get(imdbStore, "searchResult", []).map(
        ({ Title, Year, imdbID }) => {
          return (
            <tr>
              <td>{Title}</td>
              <td>{Year}</td>
              <td>
                <Link to={`/movie/${imdbID}`}>Movie details</Link>
              </td>
            </tr>
          );
        }
      );
    }
}

const TableWrapper = styledComponents.div`
.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}
`;

export default observer(Table);
