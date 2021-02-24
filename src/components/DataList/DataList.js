import React from 'react';

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

export default DataList;
