import React from "react";
import Color from "./Color";
import data from "./../data/colors";

export default class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsList: data.colors || {}
        }
        this.removeItem = this.removeItem.bind(this);
    }
    
    removeItem(id) {
        let colorsList = this.state.colorsList.filter(item => item.id !== id);
        this.setState({ colorsList });
    }

    render(){
        return(
            <div className='container-fluid'>
                <ul>
                    { this.state.colorsList && this.state.colorsList.map((item, index) => {
                        const key = Math.random();
                        return <Color key = {item.id}
                        display = {key.toFixed(2)}
                        colors = {item}
                        removeItem = { this.removeItem }
                        />
                        }
                    )}
                </ul>
            </div>
        )
    }
   
}
