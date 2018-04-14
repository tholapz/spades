import React, { Component } from "react";
import { Table } from "react-bootstrap";

const DATA = [
    {
        id: 1,
        name: {
            title: 'Mr',
            first: 'Kamol',
            last: 'Treewatchararat'
        },
        email: 'tholapz@gmail.com',
        bookingId: 'SSE',
        checkin: '14/4/2018',
        checkout: '15/4/2018',
        guests: {
            adults: 2,
            children: 0
        }
    }
];

const name = ({title, first, last}) => {
    return `${first[0]} ${last}, ${title}`;
};

const noGuests = ({adults, children}) => {
    return `adults: ${adults}, chilren: ${children}`;
};

export default class Booking extends Component {
    render() {
        const bookings = DATA;
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>check-in</th>
                        <th>check-out</th>
                        <th>No. guests</th>
                    </tr>
                </thead>
                <tbody>
                    { bookings.map(b => {
                        return (
                            <tr>
                                <td>{b.id}</td>
                                <td>{name(b.name)}</td>
                                <td>{b.checkin}</td>
                                <td>{b.checkout}</td>
                                <td>{noGuests(b.guests)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}
