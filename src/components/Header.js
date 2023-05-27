import React from 'react';
import Navbar from './Navbar';


function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="title">
            <h1>Movie Barrel</h1>
          </div>
          <Navbar />

        </div>
      </header>
    </div>
  );
}

export default Header;
