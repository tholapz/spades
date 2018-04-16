import React, { Component } from "react";
import PropsType from "prop-types";
import { find, filter, isEqual } from "lodash";
import Bed from './Bed';
import './Today.css';

import { generateItems } from '../libs/utils';

import { booking } from '../mock_booking.json';

const allocateBooking = ({ beds, booking }) => {
    const occupancy = [];
    let bed = 2;
    booking.forEach(entry => {
        occupancy.push({
            guest: entry.name,
            bed: bed++
        });
    });
    return occupancy;
};

const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};
export default class Today extends Component {
    static props = {
        beds: PropsType.array,
        booking: PropsType.array
    };

    static defaultProps = {
        beds: generateItems(12, i => ({
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

    handleCardDrop = bedIndex => dropResults => {
        // move to new Bed if empty
        if (dropResults.addedIndex !== null && this.findOccupant(this.props.beds[bedIndex].id) === undefined) {
            const guest = dropResults.payload;
            const bed = this.props.beds[bedIndex].id;
            const newOccupancy = filter(this.state.occupancy, obj => !isEqual(obj.guest, guest));
            this.setState({
                occupancy: [...newOccupancy, { guest, bed}]
            });
        }
    };


    render() {

        return (
            <div>
            <div className="card-container">
                <div className="card-column-header">ห้อง 1</div>
                <div className="card-column-content">
                    {this.props.beds.slice(0, 4).map((bed, index) => (
                        <Bed key={index} {...bed}
                            occupiedBy={this.findOccupant(bed.id)}
                            onCardDrop={this.handleCardDrop(index)}
                        />
                    ))}
                </div>
            </div>

                <div className="card-container">
                    <div className="card-column-header">ห้อง 1</div>
                    <div className="card-column-content">
                        {this.props.beds.slice(4, 8).map((bed, index) => (
                            <Bed key={index} {...bed}
                                occupiedBy={this.findOccupant(bed.id)}
                                onCardDrop={this.handleCardDrop(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}