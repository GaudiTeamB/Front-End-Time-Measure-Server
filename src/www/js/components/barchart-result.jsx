"use strict";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class BarcharResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    updateBarchar(newData) {
        this.setState({
            data: newData
        });
    }

    render() {
        return (<div className="col-sm-9">
            <BarChart width={600} height={300} data={this.props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="endpoint" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="average" fill="#8884d8" />
            </BarChart>
        </div>);
    }
}
