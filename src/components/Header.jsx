import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import cn from 'classname';
// import { useState } from 'react';

const Header = () => {
  //   const [activeBtn, setActiveBtn] = useState('mainPage');

  //   const setClassName = (id) => cn('btn', 'btn-primary', { active: activeBtn === id });

  return (
    <header className="headerSection">
      <div className="in-header">
        <ul className="navList">
          <li className="navLink">
            <button type="button" class="btn">
              Main Page
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              WorkShops
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              Contacts
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              About
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
