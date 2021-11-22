import React, { Component } from "react";
import CardItems from "./CardItems";
class Card extends Component {
    constructor() {
        super();
        this.state = { CountItem: 0 };
        this.state = { CountItem: 0 };
    }
    caseOne = () => this.setState({ CountItem: this.state.CountItem + 1 });
    caseTwo = () => this.setState({ CountItem: this.state.CountItem - 1 });
    render() {
        return (
       
            <div className="card">
                
               
                <CardItems
                    item={{
                        img: "Capture4.PNG",
                        product: "Flower1",
                        price: "10 Jd",
                    }}
                    plusItem={this.caseOne}
                    minusItem={this.caseTwo}
                />
            
             
                <CardItems
                    item={{
                    img:"download.jfif",
                    product:"Flower2",
                        price: "15 Jd",
                    }}
                    plusItem={this.caseOne}
                    minusItem={this.caseTwo}
                    
                    
                />
                <CardItems
                    item={{
                    img:"download.png",
                    product:"Flower3",
                        price: "10 Jd",
                    }}
                    plusItem={this.caseOne}
                    minusItem={this.caseTwo}
                />

<h1> the result {this.state.CountItem} </h1>

            </div>
        );
    }
}

    export default Card;