import React from "react";
import FotoPerfil from "../../Assets/img/robson-250.png";
import MenuTopBar from "../MenuTopBar";
import Sidebar from "../Sidebar";

function Profile() {
  return (
    <>
      <MenuTopBar />
      <div class="d-flex">
        <Sidebar />
        <div class="content p-1">
          <div class="list-group-item">
            <div class="d-flex">
              <div class="mr-auto p-2">
                <h2 class="display-4 titulo">Perfil</h2>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
