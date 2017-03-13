"use strict";

const 
    React = require("react"),
    BarcharResult = require("./barchart-result");

module.exports =  React.createClass({
    getInitialState: function() {
        return {
            destinationHost: "",
            times: 1,
            data: [
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ],
        };
    },

    onDestinationHostChange: function(e) {
        this.setState({
            destinationHost: e.target.value            
        });
    },

    onTimesChange: function(e) {
        this.setState({
            times: e.target.value
        });
    },

    checkTimes: function(item) {
        console.log("Call service.");
        let data = [
                {name: 'Page A', uv: 5000, pv: 9400, amt: 1200},
                {name: 'Page B', uv: 6000, pv: 8398, amt: 2310},
                {name: 'Page C', uv: 7000, pv: 7800, amt: 3490},
                {name: 'Page D', uv: 8780, pv: 6908, amt: 4500},
                {name: 'Page E', uv: 9890, pv: 5800, amt: 5681},
                {name: 'Page F', uv: 1390, pv: 4800, amt: 6400},
                {name: 'Page G', uv: 2490, pv: 3300, amt: 2200},
            ]; 
        this.setState({
            data: data
        });
    },

    render: function() {
        return <div>
                   <form>
                       <label htmlFor="destinationHost" >URL:</label>
                       <input id="destinationHost" value={this.state.destinationHost} onChange={this.onDestinationHostChange} />
                       <label htmlFor="destinationHost" >Number of calls:</label>
                       <input id="destinationHost" value={this.state.times} onChange={this.onTimesChange} />
                       <button type="button" onClick={this.checkTimes}>Check response time</button>
                   </form>
                   <BarcharResult data={this.state.data}/>
                </div>;
    }
});
