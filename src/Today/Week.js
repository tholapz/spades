import React, { Component } from "react";
import { booking } from '../mock_booking.json';
import Today from './Today';

export default class Week extends Component {
    render() {
        return (
            <div>
                <Today booking={booking.slice(0, 4)}/>
                <Today booking={booking.slice(4, 8)}/>
            </div>
        );
    }
}
