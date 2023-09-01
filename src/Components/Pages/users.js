import React from "react";
import MenuTopBar from "../MenuTopBar";
import Sidebar from "../Sidebar";

function Users() {
  return (
    <>
      <MenuTopBar />
      <div class="d-flex">
        <Sidebar />

        <div class="content p-1">
          <div class="list-group-item">
            <div class="d-flex">
              <div class="mr-auto p-2">
                <h2 class="display-4 titulo">Usuários</h2>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
