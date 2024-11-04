import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
        <header className='header'>
          <div className='inner'>
              <div className='logo-box'>
                  <a href='www.enuri.com' className='logo--enuri'>에누리</a>
                  <a href='www.enuri.com/healthy/index.jsp' className='logo--health'>건강 플러스</a>
              </div>
              <div className='search-box'>
                <input type='text' className='ipt--search'></input>
                <button>검색하기</button>
              </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
