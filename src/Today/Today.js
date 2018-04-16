import React, { Component } from "react";
import PropsType from "prop-types";
import { find, filter, isEqual } from "lodash";
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
        beds: generateItems(30, i => ({
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
        const roomSizes = [4, 4, 8];
        const chunks = [];
        roomSizes.forEach(size => {
            chunks.push(this.props.beds.splice(0, size));
        });

        return (
            <div>
                {chunks.map((beds, nth) => (
                    <div className="card-container" key={nth}>
                        <div className="card-column-header">ห้อง {`${nth + 1}`}</div>
                        <div className="card-column-content">
                            {beds.map((bed, index) => (
                                <Bed key={index} {...bed}
                                    occupiedBy={this.findOccupant(bed.id)}
                                    onCardDrop={this.handleCardDrop(index + 8 * nth)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}