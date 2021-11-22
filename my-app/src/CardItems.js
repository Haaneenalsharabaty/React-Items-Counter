import React, { Component } from "react";
import './Card'
export default class CardItems extends Component{
    constructor(props) {
        super(props);
        this.state =
        {
            counter:0,
        };
    }
    plus = (props) => {
        this.setState ({ counter:this.state.counter + 1 });
        this.props.plusItem();
    };
    mins = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
            this.props.minusItem();
        }
    };
    else = [];

    render() {
        return (
            <div className="card1">
                <img src={this.props.item.img} id="img" alt={ this.props.item.media}/>
                <h4>{this.props.item.product}</h4>
                <h6>{this.props.item.price}</h6>
                <button onClick={this.plus} >+</button>
                <span> {this.state.counter}</span>
                <button onClick={this.mins}>-</button>
            </div>
        );
       
    }
 }