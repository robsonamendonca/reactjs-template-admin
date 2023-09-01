/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenuProfile from "./MenuProfile";

function MenuTopBar() {
  return (
    <nav class="navbar navbar-expand navbar-dark bck-green">
      <a class="sidebar-toggle text-light mr-3">
        <span class="navbar-toggler-icon"></span>
      </a>
      <a class="navbar-brand" href="/">
        EMPRESA
      </a>
      <MenuProfile />
    </nav>
  );
}

export default MenuTopBar;
