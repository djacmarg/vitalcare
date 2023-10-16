import { useEffect, useState } from "react";
import { logout } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const AuthSessionLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("You are logged out");
    navigate("/");
  };

  const [loggedIn, setLoggedIn] = useState(true);
  const [events, setEvents] = useState([
    "load",
    "click",
    "scroll",
    "mousemove",
    "keypress",
  ]);
  //inactivity check
  const checkForInactivity = () => {
    //expired time
    const expireTime = localStorage.getItem("VCARE-IDLE-TIMEOUT");
    if (expireTime < Date.now()) {
      console.log("Time expired ");
      handleLogout();
      setLoggedIn(false);
    }
  };

  const updateExpireTime = () => {
    //set expired duration as per need
    const expireTime = Date.now() + 300000;
    //set expire time locally
    localStorage.setItem("VCARE-IDLE-TIMEOUT", expireTime);
  };

  useEffect(() => {
    // check for inactivity every 5 seconds
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000);
    //clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //initiate initial expire time
    updateExpireTime();

    // set events listeners
    events.forEach((event) => {
      window.addEventListener(event, updateExpireTime);
    });

    // remove events listeners
    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, updateExpireTime);
      });
    };
  }, [loggedIn]);
  return;
};

export default AuthSessionLogout;
