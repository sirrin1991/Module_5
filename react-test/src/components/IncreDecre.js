
import {Component} from "react";

class IncreDecre extends Component {
    constructor(props) {
        super(props);
        this. state = {
            number: 0
        }
    }
    incre = () => {
        this.setState(
            {number: this.state.number + 1}
        )
    };
    decre = () => {
        this.setState(
            {number: this.state.number - 1}
        )
    };
    render(){
        return (<div>
            <button onClick={this.incre}>Increase Number</button>
            <span style={{padding: 10}}>{this.state.number}</span>
            <button onClick={this.decre}>Decrease Number</button>
        </div>)
    }
}
export default IncreDecre;
