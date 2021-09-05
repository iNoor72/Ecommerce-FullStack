import React from "react";

function LoginScreen(props) {
    return <div class="log-form">
    <h2 className="test">Login to your account</h2>
    <form className="form1" method="post">
        <input type="text" title="username" name="username" placeholder="username" />
        <input type="password" title="password" name="password" placeholder="password" />
        <button type="submit" class="btn">Login</button>
    </form>
     <div id="demo"></div>
</div>
}

export default LoginScreen;