import React, { Component } from "react";
import { Draggable, Container } from "react-smooth-dnd";

export default class Bed extends Component {
    render() {
        return (
            <div className='card'>
                <Container groupName="col" onDrop={this.props.onCardDrop}>
                    {this.props.occupied && <Draggable>K Treewatchararat, Mr</Draggable>}
                </Container>
                {!this.props.occupied && <div className="no-guest">ห้องว่าง</div>}
            </div>
        );
    }
}