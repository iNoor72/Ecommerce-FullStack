import React from "react";

function LoginScreen(props) {
    return <div class="log-form">
    <h2 className="LoginHeader">Login to your account</h2>
    <form method="post" id="form">
        <input type="text" title="username" name="username" placeholder="Username" className="usernameText"/>
        <input type="password" title="password" name="password" placeholder="Password" className="passwordText"/>
        <button type="submit" class="btn">Login</button>
    </form>
     <div id="demo"></div>
</div>
}

export default LoginScreen;