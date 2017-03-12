"use strict";

const 
    React = require("react"),
    ReactDOM = require("react-dom"),
    MeasureTimeForm = require("./components/measure-time-form");

ReactDOM.render(<MeasureTimeForm /> , 
    document.querySelector("[class='container']"));