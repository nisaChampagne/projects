import React, {Component} from "react"

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    incrementCount(){
        this.setState({
            count: this.state.count+1
        });
    }

    decrementCount(){
        this.setState({
            count: this.state.count-1
        });
    }

    reset(){
        this.setState({
            count: 0 
        })
    }

    render(){
        let {count} = this.state
        return(
            <div className="counter">
                <h1>{count}</h1>
                <button onClick={() => this.incrementCount()}>+</button>
                <button onClick={() => this.decrementCount()}>-</button>
                <button onClick={() => this.reset()}>reset</button>
            </div>
        )
    }
    
}

export default Counter