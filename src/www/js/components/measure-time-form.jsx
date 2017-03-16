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
                {endpoint: 'EMEA', average: 4000},
                {endpoint: 'AMER', average: 3000},
                {endpoint: 'ASIA', average: 2000},
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

    onBarcharUpdate: function(data){
        console.log(data);
        this.setState({
            data: data
        })
    },

    callWebService2: function(path){
         return new Promise(function (resolve, reject) {

             fetch('http://localhost:8081/?url=www.google.es&times=2', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },  
            }).then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(json);
                        resolve(json);
                    }).catch(error => reject(error));
                }
            }).catch(error => reject(error));
           
        });
    },

    callWebService: function(path){
        return new Promise(function (resolve, reject) {
            debugger;
            var jsonResult =  {data: [
                            {endpoint: 'EMEA', average: 2500},
                            {endpoint: 'AMER', average: 3600},
                            {endpoint: 'ASIA', average: 5500},
                        ]};

            resolve(jsonResult);
        });
    },

    retrieveJson: function(e) {
        var service =this.callWebService2; 
        return new Promise(function (resolve, reject) {
            service(e).then(function(result) {
                resolve(result);
            }).catch(function(message) { 
                reject( message);            
            });
        });
    },

    checkTimes: function() {

        var pathValue = '/?url=' + this.state.destinationHost + '&times='+ this.state.times;
        var barcharUpdate = this.onBarcharUpdate;
        this.retrieveJson(pathValue).then(function(jsonResponse){
            barcharUpdate(jsonResponse.data);
        }).catch(function(message) {
            alert("ERROR: " + message); 
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
