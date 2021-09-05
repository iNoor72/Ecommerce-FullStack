import React from "react";

function LoginScreen(props) {
    return <div class="log-form">
    <h2 className="LoginHeader">Login to your account</h2>
    <form method="post">
        <input type="text" title="username" name="username" placeholder="username" className="usernameText"/>
        <input type="password" title="password" name="password" placeholder="password" className="passwordText"/>
        <button type="submit" class="btn">Login</button>
    </form>
     <div id="demo"></div>
</div>
}

export default LoginScreen;