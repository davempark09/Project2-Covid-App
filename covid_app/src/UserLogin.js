
import React from "react";
import Login from "./Login";

import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import Logout from "./Logout";

const UserLogin = () => {
const user = useSelector(selectUser);
console.log(user);

return <div className="mainLogin" >{user ? <Logout /> : <Login />}</div>;
};

export default UserLogin;
