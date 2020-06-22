import * as React from 'react';
import { Link } from 'react-router-dom';
import history from '../base/history';

export const PageA: React.FC = () => {
  React.useEffect(() => {
    console.log('PageA');
  });
  const clickHandler = () => {
    history.push('/a');
  };
  return (
    <div>
      <h1>Page A</h1>
      <p><Link to="/">go to home</Link></p>
      <p><Link to="/b">go to B</Link></p>
      <button onClick={clickHandler}>add same page to history</button>
    </div>
  );
};

export default PageA;
