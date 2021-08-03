/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../img/spacex.svg";

function Header() {
  //Route to about
  const history = useHistory();
  const goAbout = () => history.push("about");
  const goHome = () => history.push("/");

  return (
    <>
      <div className="flex flex-row justify-between p-4 bg-black">
        <img
          src={Logo}
          alt="SpaceX"
          onClick={goHome}
          className="h-8 px-6 cursor-pointer"
        />
        {/* <h1 className="tittle-header" onClick={goHome}>SpaceX</h1> */}
        <button className="button-nav" onClick={goAbout}>
          About Us
        </button>
      </div>
    </>
  );
}

export default Header;
