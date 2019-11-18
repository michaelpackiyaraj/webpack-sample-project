
import React, {Component} from "react";


export default class Color extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const color = this.props.colors.color;
        const id  = this.props.colors.id;

        return (
            <li style={{background: `${color}`}}>
                {this.props.display}
                <span className='close-icon' onClick={() => this.props.removeItem(id)}>X</span>
            </li>
        )
    }
} 
