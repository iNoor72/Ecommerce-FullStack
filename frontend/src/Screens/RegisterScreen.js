import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
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
      dispatch(register(name, email, password));
    }
    return <div class="log-form">
    <h2 className="RegisterHeader">Register for a new account</h2>
    <form onSubmit={submitHandler} id="form">
            {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        <input type="text" name="username" id="username" title="username" placeholder="Username" required className="registerUsernameText" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="email" title="email" type="email" placeholder="Email" required className="registerEmailText" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" title="password" placeholder="Password" required className="registerpasswordText" onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" name="address" title="address" placeholder="Address" requited className="registerAddressText" />
        <button type="submit" name="submit" class="btn">Register</button>
        <button type="button" class="btn">Cancel</button>
    </form>

    <div id="demo"></div>
</div>
}

export default RegisterScreen;