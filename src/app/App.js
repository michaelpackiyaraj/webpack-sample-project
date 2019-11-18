import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export class App extends React.Component{
    render(){//return a view ie virtual DOM
        return(
            <div id="main">
                <Header title="React App" />
               <div>{this.props.children}</div>
                <Footer year={2019} company="eXperience Technology Meetup" />
            </div>
        )
    }
}