import React, {Component} from "react"

import '../../App.css'

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
                <button className='counterBtn' onClick={() => this.incrementCount()}>+</button>
                <button className='counterBtn' onClick={() => this.decrementCount()}>-</button>
                <button className='counterBtn' onClick={() => this.reset()}>reset</button>
            </div>
        )
    }
    
}

export default Counter