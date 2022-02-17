import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <h1 className='header-title'>
          <Link to='/'> Bibliografia Ziemi Lubuskiej 1945-1989</Link>
        </h1>
        <div style={{ margin: "0 50px" }}>
          <a
            href='https://opac.wimbp.zgora.pl/integro/catalog'
            target='_blank'
            rel='noreferrer'
          >
            E-Katalog
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
