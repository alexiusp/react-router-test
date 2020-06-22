import * as React from 'react';
import { Link } from 'react-router-dom';
import history from '../base/history';

export const PageB: React.FC = () => {
  React.useEffect(() => {
    console.log('PageB');
  });
  const clickHandler = () => {
    const randomValue = Math.ceil(Math.random() * 1000);
    history.push('/b', { value: randomValue });
  };
  return (
    <div>
      <h1>Page B</h1>
      <p>
        <Link to="/">go to home</Link>
      </p>
      <p>
        <Link to="/a">go to A</Link>
      </p>
      <button onClick={clickHandler}>add with state</button>
    </div>
  );
};

export default PageB;
