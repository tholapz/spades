import React, { Component } from "react";
import PropsType from "prop-types";
import Bed from './Bed';
import './Today.css';

import { generateItems } from '../libs/utils';

export default class Today extends Component {
    static props = {
        beds: PropsType.array,
        guests: PropsType.array
    };

    static defaultProps = {
        beds: generateItems(8, i => ({
            id: i,
            occupied: Math.round(Math.random()) === 1
        })),
        guests: generateItems(4, i => ({

        }))
    };

    state = {
        occupancy: []
    };

    handleCardDrop = i => dropResults => {
        return null;
    }

    render() {

        return (
            <div className="card-container">
                <div className="card-column-header">ห้อง 1</div>
                <div className="card-column-content">
                    { this.props.beds.map((b, i) => <Bed {...b} onCardDrop={this.handleCardDrop(i)}/>)}
                </div>
            </div>
        );
    }
}