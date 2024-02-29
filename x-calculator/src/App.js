import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState();

  const handleButtonClick = (e) => {
    const clickedValue = e.target.value;
    if (clickedValue === "=") {
      try {
        const result = eval(value);
        setResult(result.toString());
        setValue("");
      } catch (error) {
        setResult("Error");
      }
    } else if (clickedValue === "C") {
      setValue("");
      setResult("");
    } else {
      setValue(value + clickedValue);
    }
  };
  return (
    <div className="wrapper">
      <div>
        {" "}
        <h1> React Calculator </h1>{" "}
        <input id="number" type="text" value={value} readOnly />{" "}
      </div>{" "}
      {result && <div className="ans"> {result} </div>}{" "}
      <div className="btnWrapper">
        <button value={7} onClick={(e) => setValue(value + e.target.value)}>
          7{" "}
        </button>{" "}
        <button value={8} onClick={(e) => setValue(value + e.target.value)}>
          8{" "}
        </button>{" "}
        <button value={9} onClick={(e) => setValue(value + e.target.value)}>
          9{" "}
        </button>{" "}
        <button value={"+"} onClick={(e) => setValue(value + e.target.value)}>
          +
        </button>{" "}
      </div>{" "}
      <div className="btnWrapper">
        <button value={4} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          4{" "}
        </button>{" "}
        <button value={5} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          5{" "}
        </button>{" "}
        <button value={6} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          6{" "}
        </button>{" "}
        <button value={"-"} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          -{" "}
        </button>{" "}
      </div>{" "}
      <div className="btnWrapper">
        <button value={1} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          1{" "}
        </button>{" "}
        <button value={2} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          2{" "}
        </button>{" "}
        <button value={3} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          3{" "}
        </button>{" "}
        <button value={"*"} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          *{" "}
        </button>{" "}
      </div>{" "}
      <div className="btnWrapper">
        <button
          value={""}
          onClick={(e) => {
            setResult("");
            setValue(e.target.value);
          }}
        >
          {" "}
          C{" "}
        </button>{" "}
        <button value={0} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          0{" "}
        </button>{" "}
        <button value={"="} onClick={handleButtonClick}>
          {" "}
          ={" "}
        </button>{" "}
        <button value={"/"} onClick={(e) => setValue(value + e.target.value)}>
          {" "}
          /{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default App;
