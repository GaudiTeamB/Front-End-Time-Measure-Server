"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import MeasureTimeForm from './components/measure-time-form';

const callData = {
    destinationHost: "",
    times: 1,
    data: [
        { endpoint: 'EMEA', average: 4000 },
        { endpoint: 'AMER', average: 3000 },
        { endpoint: 'ASIA', average: 2000 },
    ]
};

ReactDOM.render(<MeasureTimeForm data={callData} />,
    document.querySelector("[class='container chart']"));