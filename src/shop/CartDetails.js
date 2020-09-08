import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartDetailRows } from "./CartDetailsRows";

export class = CartDetails extends Component {
    getLinkClasses = () => `btn btn-secondary m-1 ${this.props.cartItems === 0 ? "disabled" : ""}`;
    
}