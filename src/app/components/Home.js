import React,{Component, PureComponent} from 'react';

import Like from "./Like";

export default class Home extends PureComponent{
    constructor(){
        super();
        this.state={
            likes:1000
        }
    }

    incr(){
        //trigger render method
        this.setState({
            likes:this.state.likes+1
        });
    }
        //called before initializing view
        //into real dom
    componentWillMount(){
       console.log("component will mount"); 
    }

    componentDidMount(){
        console.log("view is loaded");
        this.serverLikes = 1000;
        let counter = 0;
        this.timerHandle = setInterval(() =>{
            if(counter %5 == 0){
                this.serverLikes++;
                console.log("Likes >>>>>" + this.serverLikes);
            }
            this.setState({
             likes:this.serverLikes
            });
            counter++;
        },1000);

        
    }
    componentWillUnmount(){
       clearInterval(this.timerHandle);
    }
    /*shouldComponentUpdate(nextProps, nextState){
        console.log("current ",this.state, "next ", nextState);
        if(this.state.likes != nextState.likes){
            return true; // calls render method
        }
        return false; // do not calls render method
    }*/
    render(){
        console.log("home render called");
        return(
        <div>
            <h1>Home</h1>
            <p>Home Page</p>
            <span>Likes {this.state.likes}</span>
            <button onClick={()=>this.incr()}> +1</button>

            <Like count={this.state.likes}> </Like>
        </div>
        )
    }
}