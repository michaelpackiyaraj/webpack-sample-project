
import React, {Component} from "react";


export default class About extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>About</h2>
            <div class="flex two">
                <div>
                    <article class="card">
                    <img src="https://picnicss.com/web/img/forest.jpg" />
                    <footer>
                        <h3>Misty Forest</h3>
                        <button>Like</button>
                    </footer>
                    </article>
                </div>
                <div>
                    <article class="card">
                    <img src="https://picnicss.com/web/img/forest.jpg" />
                    <footer>
                        <h3>Misty Forest</h3>
                        <button>Like</button>
                    </footer>
                    </article>
                </div>
                </div>
            </div>
        )
    }
} 
