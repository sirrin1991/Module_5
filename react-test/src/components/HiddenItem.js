import {Component} from "react";

class HiddenItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }

    hiddenWord = () => {
        let flag = !this.state.display ;
        this.setState({
            display: flag
        })
    };

    render() {
        let word;
        let btn;
        if(this.state.display){
            word = "Nguyễn Thanh Công";
            btn = "Hidden word"
        }else {
            btn = "Show word"
        }
        return (
            <div style={{ textAlign: 'center' }}>
                {word} <br/>
                <button onClick={this.hiddenWord}>
                    {btn}
                </button>
            </div>
        );
    }
}
export default HiddenItem;
