import React from "react";

function CheckoutScreen(props) {
    return <div className="checkout-container">

        <h3>
            Order was made successfully. Your Order number is #{Math.floor((Math.random() * 9999999)) + 1}.
            
        </h3>
        <p>Thank you for using Estabena.</p>

    </div>
}

export default CheckoutScreen;