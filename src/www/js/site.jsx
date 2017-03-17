"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import MeasureTimeForm from './components/measure-time-form';

const callData = {
    destinationHost: "www.google.es",
    times: 1,
    error: "",
    data: [
        { endpoint: 'EMEA', average: 0 }
    ]
};

ReactDOM.render(<MeasureTimeForm data={callData} />,
    document.querySelector("[class='container chart']"));