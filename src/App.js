import React, {Component} from 'react';
import KeyPadComponent from './components/KeyPadComponent';
import DisplayComponent from './components/DisplayComponent';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            computation: '',
            result: 0,
        }
    }

    onClick= event =>{
        let computation = this.state.computation;
        const pressedButton = event.target.innerHTML;
        if(pressedButton==='C'){
            return this.clear();
        }else if((pressedButton>= '0' && pressedButton<='9') || (pressedButton === '.')){
            computation += pressedButton;
        }else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) computation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
          try {
            const evalResult = eval(computation);
            const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
            this.setState({result});
          } catch (error) {
            alert('Invalid Mathematical computation');
          }
        }
        else {
          computation = computation.trim();
          computation = computation.substr(0, computation.length - 1);
        }
                    
        this.setState({computation: computation});
      }
    

    clear(){
        this.setState({
            computation: '',
            result: 0,
        });
    }
    render(){
        return(
        <div>
            <div className = "cal-body">
                <h1>Calculator Body</h1>
                <DisplayComponent computation={this.state.computation} result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        </div>
        );
    }

}

export default App;