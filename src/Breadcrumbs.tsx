import * as React from 'react';

import { breadcrumbs } from './base/history';
import './Breadcrumbs.css';

export const Breadcrumbs: React.FC = () => {
  const clickHandler = () => {
    console.log(breadcrumbs);
  }
  return (
    <ul className="breadcrumbs">
      <li>Breadcrumbs: </li>
      {breadcrumbs.map((location) => <li key={location.key}>{location.pathname}</li>)}
      <li><button onClick={clickHandler}>log breadcrumbs</button></li>
    </ul>
  );
};

export default Breadcrumbs;
