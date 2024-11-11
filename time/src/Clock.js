import {Component} from 'react';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date().toLocaleTimeString()
        }
    }
changeTime(){
    this.setState ({time:'Good morning'})
}

componentDidMount(){
    this.timerID = setInterval(() =>
        this.tick(), 1000)
    
}
componentWillUnmount() {
    clearInterval (this.timerID)
}

tick(){
    this.setState({
        time: new Date().toLocaleTimeString()
    })
}

    render(){
        return(<p className='Time'>{this.state.time} - clock</p>)
    }
}


