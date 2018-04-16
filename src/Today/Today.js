import React, { Component } from "react";
import PropsType from "prop-types";
import { find } from "lodash";
import Bed from './Bed';
import './Today.css';

import { generateItems } from '../libs/utils';

import { booking } from '../mock_booking.json';

const allocateBooking = ({ beds, booking }) => {
    const occupancy = [];
    let bed = 0;
    booking.forEach(entry => {
        occupancy.push({
            guest: entry.name,
            bed: bed++
        });
    });
    return occupancy;
};
export default class Today extends Component {
    static props = {
        beds: PropsType.array,
        booking: PropsType.array
    };

    static defaultProps = {
        beds: generateItems(8, i => ({
            id: i
        })),
        booking
    };

    state = {
        occupancy: allocateBooking(this.props)
    };

    findOccupant = bedId => {
        return find(this.state.occupancy, obj => obj.bed === bedId);
    };

    handleCardDrop = i => dropResults => {
        return null;
    }

    render() {

        return (
            <div className="card-container">
                <div className="card-column-header">ห้อง 1</div>
                <div className="card-column-content">
                    {this.props.beds.map((b, i) => <Bed {...b} occupiedBy={this.findOccupant(b.id)} onCardDrop={this.handleCardDrop(i)}/>)}
                </div>
            </div>
        );
    }
}