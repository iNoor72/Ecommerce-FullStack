import React from "react";
import vegetables from "../vegetables";
import { Link } from "react-router-dom";

function VegProductScreen(props) {
    const vegProduct = vegetables.products.find(x => x.id === props.match.params.id)
  



    return <div>Hello</div>
}

export default VegProductScreen;