import React from "react";

function RegisterScreen(props) {
    return <div class="log-form">
    <h2>Register for new Account</h2>
    <form method="post" id="form1">
        <input type="text" name="username" id="username" title="username" placeholder="Username" required />
        <input type="text" name="email" title="email" type="email" placeholder="Email" required />
        <input type="password" name="password" title="password" placeholder="Password" required />
        <button type="submit" name="submit" class="btn">register</button>
        <a href="index.html" class="cancel-btn" ><button type="button" class="btn">Cancel</button></a>
    </form>
    <div id="demo"></div>
</div>
}

export default RegisterScreen;