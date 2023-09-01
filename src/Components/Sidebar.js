import React from 'react';

function Sidebar() {
  const navLinks = [
    {
      id: "home",
      title: "Dashboard",
      class: "fas fa-tachometer-alt"
    },
    {
      id: "users",
      title: "Usuários",
      class: "fas fa-chalkboard-teacher"
    },
    {
      id: "login",
      title: "Sair",
      class: "fas fa-sign-out-alt"
    },
  ];  
  return (
    <nav class="sidebar">
    <ul class="list-unstyled">
       {navLinks.map((link) => (
            <li key={link.id} >
              <a href={`/${link.id}`}>
              <i className={link.class}></i>
              &nbsp; {link.title}
              </a>
            </li>
          ))}

    </ul>
 </nav> 
  );
}

export default Sidebar;
