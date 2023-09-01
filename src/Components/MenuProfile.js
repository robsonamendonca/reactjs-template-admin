import React from "react";
import FotoPerfil from "../Assets/img/robson-250.png";

function MenuProfile() {
  const navLinks = [
    {
      id: "profile",
      title: "Profile",
      class: "fas fa-user",
    },
    {
      id: "login",
      title: "Sair",
      class: "fas fa-sign-out-alt",
    },
  ];
  return (
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle menu-header"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
          >
            <img src={FotoPerfil} width="20" height="20" /> &nbsp;
            <span class="d-none d-sm-inline">Robson</span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {navLinks.map((link) => (
              <a key={link.id} class="dropdown-item"
                 href={`/${link.id}`}>
                <i className={link.class}></i>
                &nbsp; {link.title}
              </a>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuProfile;
