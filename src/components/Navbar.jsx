import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// https://fontawesome.com/icons -> fa-house -> faHouse
import {
  faHouse,
  faCalendarPlus,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faEnvelope} />;

const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>
        <FontAwesomeIcon icon={faHouse} />
        home
      </Link>
      <Link to={'/create'}>
        <FontAwesomeIcon icon={faCalendarPlus} />
        create
      </Link>
      <Link to={'/login'}>
        <FontAwesomeIcon icon={faRightToBracket} /> login
      </Link>
    </nav>
  );
};

export default Navbar;
