// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar :React.FC = () => {
//   return (
//     <header>
//     <div className="container">
//         <div className="header">
//             <img src="" alt="" />
//             <nav className="header-links d-none d-md-block">
//                 <Link to="/">Haqqımızda</Link>
//                 <Link to="/Xidmetler">Xidmətlər</Link>
//                 <Link to="#">Tərəfdaşlar</Link>
//                 <Link to="#">Qeydiyyat</Link>
//             </nav>
//             <div className="header-btns d-none d-md-block position-relative">
//                 <button className="login-btn">Qeydiyyat</button>

          
//             </div>
//             <i className="fa-solid fa-bars d-block d-md-none "></i>
//         </div>
//     </div>
//       {/* <div className="dropdown-content position-absolute">
//     <Link to="/sehife">Link 1</Link>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div> */}

// </header>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <img src="" alt="" />
          <nav className="header-links d-none d-md-block">
            <Link to="/">Haqqımızda</Link>
            <Link to="/Xidmetler">Xidmətlər</Link>
            <Link to="/Terafdaslar">Tərəfdaşlar</Link>
          </nav>
          <div className="header-btns d-none d-md-block position-relative">
            {/* Qeydiyyat düyməsi */}
            <button className="login-btn" onClick={toggleDropdown}>
              Qeydiyyat
            </button>

            {/* Dropdown menyu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu show position-absolute">
                <li>
                  <Link to="/Sahibkar" className="dropdown-item">
                    Sahibkar üçün
                  </Link>
                </li>
                <li>
                  <Link to="/Bank" className="dropdown-item">
                    Bank üçün
                  </Link>
                </li>
                <li>
                  <Link to="/Dovlet" className="dropdown-item">
                    Dövlet qurumları üçün
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <i className="fa-solid fa-bars d-block d-md-none "></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
