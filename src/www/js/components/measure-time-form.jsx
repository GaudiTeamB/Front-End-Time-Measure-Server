"use strict";

const 
    React = require("react");

module.exports =  React.createClass({
    getInitialState: function() {
        return {
            destinationHost: "",
            times: 1
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
        console.log("Call service.")
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
                </div>;
    }
});
