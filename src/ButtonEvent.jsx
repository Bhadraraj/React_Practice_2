import React, { Component } from "react";
class ButtonEvent extends Component{
    constructor(){
        super();
        this.state={buttonText:"Clicki Me Please"};
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(){
        this.setState(()=>{
            return {buttonText:"Thanks ,been Clicked"}
        })
    }
    render(){
        const {buttonText}=this.state;
        return <button onClick={this.handleClick}>{buttonText} </button>
    }
}
export default ButtonEvent;