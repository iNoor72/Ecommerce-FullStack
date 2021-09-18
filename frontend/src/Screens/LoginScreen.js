import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function LoginScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
      if (userInfo) {
        props.history.push(redirect);
      }
      return () => {
        //
      };
    }, [userInfo]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(email, password));
  
    }

    return <div class="log-form">
    <h2 className="LoginHeader">Login to your account</h2>
    <form onSubmit={submitHandler} id="form">
    {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        <input type="text" title="username" name="username" placeholder="ِEmail" className="usernameText" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" title="password" name="password" placeholder="Password" className="passwordText" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" class="btn">Login</button>
    </form>
     <div id="demo"></div>
</div>
}

export default LoginScreen;