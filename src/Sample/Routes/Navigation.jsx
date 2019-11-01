import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constant.routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
      <li>
        <Link to={ROUTES.CONTACT}>Contacts</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
