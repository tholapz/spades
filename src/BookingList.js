import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { ROUTES } from './constants';

const { BOOKING } = ROUTES;

const data = [
    {
        "id": 0,
        "requestedUnit": "PRIVATE",
        "begin": "10-04-2018",
        "end": "14-04-2018",
        "guests": 2,
        "remark": ""
    },
    {
        "id": 1,
        "requestedUnit": "BUNK",
        "begin": "10-04-2018",
        "end": "12-04-2018",
        "guests": 2,
        "remark": ""
    },
];

const BookingListItem = props => {
    return (
        <ListGroupItem href={`#${BOOKING}/${props.id}`}>
            {props.requestedUnit}
        </ListGroupItem>
    )
}
export default class BookingList extends Component {
    render() {
        return (
            <ListGroup>
                { data.map(booking => <BookingListItem {...booking} />) }
            </ListGroup>
        )
    }
}