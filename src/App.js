import React, {Component} from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor() {
        super();

        this.state = {
            display: ""
        }
    }

    render() {
        return (
            <div>
                <div className="calculator_body">
                    <h1>Simple Calculator</h1>
                    <DisplayComponent display={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
