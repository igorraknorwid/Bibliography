import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <h1>
          <Link to='/'> Bibliografia Ziemi Lubuskiej 1945-1985</Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
