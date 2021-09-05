import React from "react";

function RegisterScreen(props) {
    return <div class="log-form">
    <h2 className="RegisterHeader">Register for a new account</h2>
    <form method="post" id="form">
        <input type="text" name="username" id="username" title="username" placeholder="Username" required className="registerUsernameText"/>
        <input type="text" name="email" title="email" type="email" placeholder="Email" required className="registerEmailText"/>
        <input type="password" name="password" title="password" placeholder="Password" required className="registerpasswordText"/>
        <button type="submit" name="submit" class="btn">Register</button>
        <button type="button" class="Cancelbtn">Cancel</button>
    </form>
    <div id="demo"></div>
</div>
}

export default RegisterScreen;