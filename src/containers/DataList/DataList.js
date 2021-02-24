import React from 'react';
import { arrayOf, string } from 'prop-types';

const DataList = ({ data }) => {
  return (
    <div className="has-text-centered">
      {data.map((e, i) => {
        return (
          <span className="tag is-light m-1" key={i}>
            {e}
          </span>
        );
      })}
    </div>
  );
};

DataList.propTypes = {
  data: arrayOf(string),
};

export default DataList;
