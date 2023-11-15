import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function TopBar() {
  const { userData } = useAuth(); 

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/*<!-- Sidebar Toggle (Topbar) -->*/}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
        {/*<!-- Topbar Navbar -->*/}
        <ul className="navbar-nav ml-auto">
          {/*<!-- Nav Item - Alerts -->*/}
          <li className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link dropdown-toggle" to="/alertas" id="alertsDropdown">
              <i className="fas fa-bell fa-fw"></i>
              {/*<!-- Counter - Alerts -->*/}
              <span className="badge badge-danger badge-counter">3+</span>
            </Link>
          </li>
          {/*<!-- Nav Item - Messages -->*/}
          <li className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link dropdown-toggle" to="/emails" id="messagesDropdown">
              <i className="fas fa-envelope fa-fw"></i>
              {/*<!-- Counter - Messages -->*/}
              <span className="badge badge-danger badge-counter">7</span>
            </Link>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          {/*<!-- Nav Item - User Information -->*/}
          <li className="nav-item dropdown no-arrow">
            {userData ? (
              <Link className="nav-link dropdown-toggle" to={`/usuarios/${userData.userId}/profile`} id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {userData.userType === 1 ? 'Usuario' : 'Administrador'}: {userData.userName}
                </span>
                {userData && (
                  <img
                    className="img-profile rounded-circle"
                    src={`http://localhost:3010${userData.avatarPath}`} 
                    alt={userData.userName}
                    width="60"
                  />
                )}
              </Link>
            ) : null}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default TopBar;
