import React, { useState, useEffect } from 'react';
import DataList from '../../containers/DataList';
import getData from '../../services/data';
import './App.css';

const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    getData().then((body) => {
      setInitialData(body.data);
      setCurrentData(body.data);
    });
  }, []);

  const handlerChange = (event) => {
    event.target.value === '' ? setCurrentData(initialData) : setInputValue(event.target.value);
  };

  const filterCheckHandler = () => {
    isChecked ? setChecked(false) : setChecked(true);
  };

  const filterLengthHandler = () => {
    if (isNaN(inputValue) || inputValue === '') {
      return;
    } else {
      setCurrentData(initialData.filter((e) => e.length >= inputValue));
    }
  };

  const filterSubstrHandler = () => {
    if (!isNaN(inputValue) || inputValue === '') {
      return;
    } else {
      if (isChecked) {
        setCurrentData(initialData.filter((e) => e.includes(inputValue)));
      } else {
        setCurrentData(
          initialData.filter((e) => e.toLowerCase().includes(inputValue.toLowerCase())),
        );
      }
    }
  };
  return (
    <div className="App">
      <section className="section">
        <h1 className="title">MP Test Task</h1>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Enter a number or a string"
              onChange={(e) => handlerChange(e)}
            ></input>
          </div>
          <div className="control is-flex mt-3">
            <label className="checkbox mr-2 is-size-2" style={{ minWidth: '75px' }}>
              <input type="checkbox" checked={isChecked} onChange={filterCheckHandler}></input>
              <span className="checkbox m-2 is-size-5" style={{ userSelect: 'none' }}>
                Filter
              </span>
            </label>
            <div className="buttons are-medium is-justify-content-center">
              <button className="button is-primary is-outlined" onClick={filterLengthHandler}>
                Filter by length
              </button>
              <button className="button is-primary is-outlined" onClick={filterSubstrHandler}>
                Filter by substr
              </button>
              <span className="tag is-info is-light m-2 is-size-5">
                Results: {currentData.length}
              </span>
            </div>
          </div>
        </div>
      </section>
      <DataList data={currentData} />
    </div>
  );
};

export default App;
