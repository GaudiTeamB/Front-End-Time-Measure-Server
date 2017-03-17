"use strict";

import React from 'react';
import BarcharResult from './barchart-result';

export default class MeasureTimeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        this.checkTimes = this.checkTimes.bind(this);
        this.onDestinationHostChange = this.onDestinationHostChange.bind(this);
        this.onTimesChange = this.onTimesChange.bind(this);
    }

    checkTimes() {
        var pathValue = '/?url=' + this.state.destinationHost + '&times=' + this.state.times;
        var barcharUpdate = this.onBarcharUpdate;
        var self = this;
        this.retrieveJson(pathValue).then(function (jsonResponse) {
            barcharUpdate(jsonResponse.data, self);
            self.render();
        }).catch(function (message) {
            alert("ERROR: " + message);
        });
    }

    onDestinationHostChange(e) {
        this.setState({
            destinationHost: e.target.value
        });
    }

    onTimesChange(e) {
        this.setState({
            times: e.target.value
        });
    }

    onBarcharUpdate(data, self) {
        self.setState({
            data: data
        });
        console.log(self.state);
    }

    callWebService2(path) {
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
    }

    callWebService(path) {
        return new Promise(function (resolve, reject) {
            debugger;
            var jsonResult = {
                data: [
                    { endpoint: 'EMEA', average: 2500 },
                    { endpoint: 'AMER', average: 3600 },
                    { endpoint: 'ASIA', average: 5500 },
                ]
            };

            resolve(jsonResult);
        });
    }

    retrieveJson(e) {
        var service = this.callWebService2;
        return new Promise(function (resolve, reject) {
            service(e).then(function (result) {
                resolve(result);
            }).catch(function (message) {
                reject(message);
            });
        });
    }

    render() {
        return (<div className="container">
            <div className="col-sm-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="destinationHost">Host endpoint</label>
                        <input className="form-control" id="destinationHost" value={this.state.destinationHost} onChange={this.onDestinationHostChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="times">Number of calls</label>
                        <input className="form-control" id="times" value={this.state.times} onChange={this.onTimesChange} />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={this.checkTimes}>Check response time</button>
                </form>
            </div>
            <BarcharResult data={this.state.data} />
        </div>);
    }
}
