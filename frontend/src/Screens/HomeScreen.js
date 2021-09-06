import React from "react";
import {Route, Link} from 'react-router-dom'

function HomeScreen(props) {

    return <div className="catagory">
    <div className="card">
      <img id="pic" src="./images/veg1.jpeg" alt="Fruits" />
      <div className="container">
        <h2>Fruits</h2>
        <center>
        <Link to= "/fruits"><button className="custom-button">Shop Now</button></Link>
        </center>
      </div>
    </div>
    <div className="card">
      <img id="pic" src="./images/veg2.jpg" alt="Vegetables" />
      <div className="container">
        <h2>Vegetables</h2>
        <center>
        <Link to= "/vegetables"><button className="custom-button">Shop Now</button></Link>
        </center>
      </div>
    </div>

  </div>
}
export default HomeScreen;