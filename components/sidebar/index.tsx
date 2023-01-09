import React from "react";

export default function Sidebar() {
  const sidebarActive = () => {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.classList.toggle("active");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header mb-5">
        <a href="#" className="sidebar-logo fs-5 fw-bold mb-3">
          PackRooms
        </a>
        <button
          className="btn btn-white d-block d-md-none"
          type="button"
          onClick={sidebarActive}
        >
          <i className="bx bx-menu" />
        </button>
      </div>
      <div className="sidebar-menu " id="sidebarMenu">
        {/*Sidebar Top*/}
        <a href="dashboard" className="sidebar-link">
          <i className="bx bx-home" /> <span>Dashboard</span>
        </a>
        <a href="artikel" className="sidebar-link">
          <i className="bx bx-transfer" /> <span>Artikel</span>
        </a>
        <a href="loker" className="sidebar-link">
          <i className="bx bx-package"> </i> <span>Loker Barang</span>
        </a>
        <a href="pengguna" className="sidebar-link">
          <i className="bx bx-group"> </i> <span>Pengguna</span>
        </a>
        <hr className="my-3" />
        {/*Sidebar Middle*/}
        <a href="pengaturan" className="sidebar-link">
          <i className="bx bx-cog"> </i>
          <span>Pengaturan Akun</span>
        </a>
        <a href="/" className="sidebar-link">
          <i className="bx bx-log-out-circle"> </i> <span>Log Out</span>
        </a>
      </div>
    </div>
  );
}
