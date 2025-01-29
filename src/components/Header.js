import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/images.jpg";
import useOnline from "./useOnline";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [login, setLogin] = useState(false);

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items)

  const handleLogin = ()=> {
    login === false ? setLogin(true) : setLogin(false);
  }

  const isOnline = useOnline();

  return (
  <div class="bg-pink-100 flex justify-between ">
    <img class="w-28"
      id="logo"
      alt="logo"
      src= {Logo}
      // src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
    />
    <ul class="flex">
      <Link to = {"/"}> <li class="p-2">Home</li> </Link>
      <Link to = {"/contact"}> <li class="p-2">Contact</li> </Link>
      <Link to = {"/about"}> <li class="p-2">About</li> </Link>
      <Link to = {"/instamart"}> <li class="p-2">InstaMart</li> </Link>
      <Link to = {"/cart"}><li class="p-2">cartItems-{cartItems.length}</li></Link>
    </ul>
    <h2>{isOnline?"🟢":"🔴"}</h2>
    <ul className="font-bold">
      <li>{user.name}</li>
      <li>{user.mail}</li>
    </ul>
    <button class="p-2 bg-slate-200" onClick={handleLogin}>
      {login === true ? <h1>Logout</h1> : <h1>Login</h1>}
    </button>
  </div>
)};

export default Header;