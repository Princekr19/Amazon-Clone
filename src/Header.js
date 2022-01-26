import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
  <div className='header'>
      <img 
        className="header__logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />

    <div className="header__search">
        <input
            className="header__searchInput"
            type="text" />
            <SearchIcon className='header__searchIcon' />
            {/* Logo */}
    </div>

    <div className="header__nav">
        <link to='/login'> 
        <div className="header__option">
            <span className='header__optionlineOne'>Hello Guest</span>
            <span className='header__optionlineTwo'>Sign In</span>
        </div>
        </link>
        <div className="header__option">
        <span className='header__optionlineOne'>Returns</span>
            <span className='header__optionlineTwo'>& Orders</span>
        </div>

        <div className="header__option">
        <span className='header__optionlineOne'>Yours</span>
            <span className='header__optionlineTwo'>Prime</span>
        </div>
    </div>
  </div>
  ) 
}

export default Header;
