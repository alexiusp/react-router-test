import * as React from 'react';

import { breadcrumbs } from './base/history';
import './Breadcrumbs.css';

export const Breadcrumbs: React.FC = () => {
  return (
    <ul className="breadcrumbs">
      <li>Breadcrumbs: </li>
      {breadcrumbs.map((location) => <li key={location.key}>{location.pathname}</li>)}
    </ul>
  );
};

export default Breadcrumbs;
