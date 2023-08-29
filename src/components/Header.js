import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo"><a href="Home.js">리액트</a></div>
        <div className="menu-wrapper">
          <ul className="menu">
            <li onClick={toggleMenu}>목록</li>
          </ul>
          {isMenuOpen && (
            <ul className="submenu">
              <li><a href="VirtualDom.js">Virtual DOM이란?</a></li>
              <li><a href="JSX.js">JSX란?</a></li>
              <li></li>
              {/* 추가적인 서브메뉴 아이템 추가 */}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
