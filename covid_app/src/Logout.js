import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./userSlice";

const Logout = () => {
const dispatch = useDispatch();
const user = useSelector(selectUser);

const logout = (e) => {
    dispatch(logout());
};

return (
    <form className="logout">
    <h1>
        Welcome <span className="userName">{user.name}</span>!
    </h1>
    <button className="logoutButton" onClick={(e) => logout(e)}>
        Log out
    </button>
    </form>
);
};

export default Logout;