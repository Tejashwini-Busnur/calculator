import React, {Component} from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import KeyPadComponent from "./components/KeyPadComponent"



    class App extends Component {


        constructor() {
            super();

            this.state = {
                display: ""
            }
        }

        onClick = button => {

            if (button === "=") {
                this.calculate()
            } else if (button === "C") {
                this.reset()
            } else if (button === "CE") {
                this.backspace()
            } else {
                this.setState({
                    display: this.state.display + button
                })
            }
        };


        calculate = () => {
            var checkDisplay = ''
            if (this.state.display.includes('--')) {
                checkDisplay = this.state.display.replace('--', '+')
            } else {
                checkDisplay = this.state.display
            }

            try {
                this.setState({
                    // eslint-disable-next-line
                    display: (eval(checkDisplay) || "") + ""
                })
            } catch (e) {
                this.setState({
                    display: "error"
                })

            }
        };

        reset = () => {
            this.setState({
                display: ""
            })
        };

        backspace = () => {
            this.setState({
                display: this.state.display.slice(0, -1)
            })
        };

        render() {
            return (
                <div>
                    <div className="calculator-body">
                        <h1 class="h1">Simple Calculator</h1>
                        <DisplayComponent display={this.state.display}/>
                        <KeyPadComponent onClick={this.onClick}/>
                    </div>
                </div>
            );
        }
    }

export default App;
