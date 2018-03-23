import React, { Component } from "react";
import cx from "classnames";
import keymirror from "key-mirror";
import './Floorplan.css';
import './Room.css';
import Bed from './Bed';

import schema from './mockData.json';

const Room = ({ title, beds }) => {
    return (
        <div className={ cx('room') }>
            { beds.map(bed => <Bed title={title} {...bed} />) }
        </div>
    );
};

const Floor = ({ title, rooms }) => {
    return (
        <div classnames={ cx('floor') }>
            <h1>{title}</h1>
            { rooms.length === 0 && <h2 className="no-data">No data...</h2> }
            { rooms.map(room => <Room {...room} />) }
        </div>
    );
};

export default class Floorplan extends Component {
    render() {
        const floors = this.props.floors || schema.floors;
        return (
            <div classnames={ cx('floorplan') }>
                { floors.map(floor => <Floor {...floor} />) }
            </div>
        );
    }
}