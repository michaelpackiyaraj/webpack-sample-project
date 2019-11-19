import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {/* todo: navigation menu later  */}
                <div>
                    <NavLink to="/" 
                    exact 
                    className="button" 
                    activeClassName="success" >Home  </NavLink>
                    <NavLink to ="/about" className="button" activeClassName="success">About</NavLink>
                    <NavLink to ="/contact" className="button" activeClassName="success">Contact</NavLink>
                    <NavLink to ="/colors" className="button" activeClassName="success">Color Pallete</NavLink>
                    <NavLink to ="/virtualized" className="button" activeClassName="success">Virtualized</NavLink>
                    <NavLink to ="/novirtualized" className="button" activeClassName="success">!Virtualized</NavLink>
                </div>
            </div>
        )
    }
}