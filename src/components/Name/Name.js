import React, { Component } from "react";

import './Name.css';

export default ({ title, first, last }) => {
    return <span className="name-component">{`${first[0]} ${last}, ${title}`}</span>;
};
