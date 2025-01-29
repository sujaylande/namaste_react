import React, { useContext } from "react";
import userContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext);
  return (
    <div class="bg-pink-50 h-60 m-3">
      <h1>footer</h1>
      <ul className="font-bold">
      <li>{user.name}</li>
      <li>{user.mail}</li>
    </ul>
    </div>
)
};

export default Footer;

