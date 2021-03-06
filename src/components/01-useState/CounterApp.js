import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 10,
      counter4: 20,
  });
  const {counter1, counter2} = state;
  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      {console.log(counter1)}
      {console.log(counter2)}
      <hr />
      <button className="btn btn-primary" onClick={() => {
          setState({
            ...state,  
            counter1 :counter1 + 1});
      }}>
        +1
      </button>
    </>
    
  );
};
