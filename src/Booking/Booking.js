import React, { Component } from "react";
import { Table } from "react-bootstrap";
import moment from 'moment';
import { booking } from '../mock_booking.json';
import Name from '../components/Name';
import Calendar from '../components/Calendar';
import PrintThis from '../components/PrintThis';

// const DATA = [
//     {
//         id: 1,
//         name: {
//             title: 'Mr',
//             first: 'Kamol',
//             last: 'Treewatchararat'
//         },
//         email: 'tholapz@gmail.com',
//         bookingId: 'SSE',
//         checkin: '14/4/2018',
//         checkout: '15/4/2018',
//         guests: {
//             adults: 2,
//             children: 0
//         }
//     }
// ];

const noGuests = ({adults, children}) => {
    return `adults: ${adults}, chilren: ${children}`;
};

export default class Booking extends Component {
    render() {
        const bookings = booking;
        return (
            <div>
                <PrintThis/>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>check-in</th>
                            <th>check-out</th>
                            <th>email</th>
                            <th>No. guests</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookings.map((b, i) => {
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td><Name {...b.name}/></td>
                                    <td><Calendar date={b.checkin}/></td>
                                    <td><Calendar date={b.checkout}/></td>
                                    <td><a href={`mailto:${b.email}?Subject=The%20Spades%20Hostel`}>{b.email}</a></td>
                                    <td>{noGuests(b.guests)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
