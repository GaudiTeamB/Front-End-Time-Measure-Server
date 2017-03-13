const 
    React = require("react"),
    Recharts = require("recharts");

//import { LineChart, Line } from 'recharts';
const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;


module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data
        };
    },

    updateBarchar: function(newData){
        this.setState({
            data: newData
        });
    },

    render: function() {
  	    return	<div><h1>CHART</h1>
  	    <BarChart width={600} height={300} data={this.props.data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart></div>;
  }
});
