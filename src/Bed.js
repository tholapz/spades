import React, { Component } from "react";
import cx from 'classnames';
import keymirror from "key-mirror";
import { Button } from 'react-bootstrap';

const ROOM_STATUS = keymirror({
    AVAILABLE,
    BOOKED
});

const { AVAILABLE, BOOKED } = ROOM_STATUS;

function cxStatus(status) {
    switch (status) {
        case AVAILABLE:
            return 'btn-default';
        case BOOKED:
            return 'btn-primary';
        default:
            return 'btn-danger';
    }
}

export default class Bed extends Component {
    state = {
        status: AVAILABLE
    };

    bindEvent = status => {
        switch(status) {
            case AVAILABLE:
                return this.book;
            case BOOKED:
                return this.checkout;
            default:
                return this.ready;
        }
    };

    book = () => {
        this.setState({ status: BOOKED });
    };

    checkout = () => {
        this.setState({ status: 'CLEANING' });
    };

    ready = () => {
        this.setState({ status: AVAILABLE });
    };

    render() {
        const { title, type } = this.props;
        const { status } = this.state;
        return (
            <Button
                onClick={this.bindEvent(status)}
                className={cx('bed', cxStatus(status), type)}
            >
                <h2>{title}</h2>
                <h3>{status}</h3>
            </Button>
        );
    }
}
