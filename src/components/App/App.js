import React, { useState, useEffect } from 'react';
import DataList from '../DataList';
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
    setInputValue(event.target.value);
  };

  const filterCheckHandler = () => {
    if (isChecked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const filterLengthHandler = () => {
    if (isNaN(inputValue) || inputValue === '') {
      return;
    } else {
      setCurrentData(initialData.filter((e) => e.length >= inputValue));
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
              placeholder="Primary input"
              onChange={(e) => handlerChange(e)}
            ></input>
          </div>
          <div className="control is-flex mt-3">
            <label className="checkbox mr-2 is-size-2">
              <input type="checkbox" checked={isChecked} onChange={filterCheckHandler}></input>
              <span className="checkbox m-2 is-size-5">Filter</span>
            </label>
            <div className="buttons are-medium">
              <button className="button is-primary is-outlined" onClick={filterLengthHandler}>
                Filter by length
              </button>
              <button className="button is-primary is-outlined">Filter by substr</button>
            </div>
          </div>
        </div>
      </section>
      <DataList data={currentData} />
    </div>
  );
};

export default App;
