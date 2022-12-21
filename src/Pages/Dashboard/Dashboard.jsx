import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [showSidear, setShowSidear] = useState(false);

  const toggleSideBar = () => {
    setShowSidear((prev) => !prev);
  };
  console.log(showSidear);

  return (
    <div className="w-full h-full">
      <div className="dashboard">
        {/* <header className="header" id="header">
          <div className="header__toggle">
           
            Dashboard
          </div>

          <div className="header__img">
            <img src={perfil} alt="" />
          </div>
        </header> */}

        <div
          // className={!showSidear ? "l-navbar" : "l-navbar show"}
          className={`l-navbar ${showSidear ? "show" : ""}`}
          id="nav-bar"
        >
          <nav className="nav">
            <div>
              <div className="nav__logo">
                <i className="bx bx-layer nav__logo-icon"></i>
                <span className="nav__logo-name">bikikini official</span>
              </div>

              <div className="nav__list">
                <div className="nav__link active">
                  <i className="bx bx-grid-alt nav__icon"></i>
                  <span className="nav__name">Dashboard</span>
                </div>

                <div className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Users</span>
                </div>

                <div className="nav__link">
                  <i className="bx bx-message-square-detail nav__icon"></i>
                  <span className="nav__name">Messages</span>
                </div>

                <div className="nav__link">
                  <i className="bx bx-bookmark nav__icon"></i>
                  <span className="nav__name">Favorites</span>
                </div>

                <div className="nav__link">
                  <i className="bx bx-folder nav__icon"></i>
                  <span className="nav__name">Data</span>
                </div>

                <div className="nav__link">
                  <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                  <span className="nav__name">Analytics</span>
                </div>
              </div>
            </div>

            <div className="nav__link" onClick={toggleSideBar}>
              <i className="bx bx-log-out nav__icon"></i>
              <span className="nav__name">
                {showSidear ? "close dashboard" : "open dashboard"}
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div>
        hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        suscipit deleniti tenetur facere fugit, doloremque ipsum voluptatum quas
        similique enim officiis molestiae aliquam incidunt laudantium porro,
        magni veritatis quibusdam rem. Vel fugit sapiente natus, assumenda
        ducimus qui enim ipsa ex minima vero, vitae placeat exercitationem cum
        aliquam voluptatibus nihil quibusdam?
      </div>
    </div>
  );
}

export default Dashboard;
