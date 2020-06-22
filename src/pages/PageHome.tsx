import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageHome: React.FC = () => {
  React.useEffect(() => {
    console.log('PageHome');
  })
  return (
    <div>
      <h1>Home page</h1>
      <p><Link to="/a">go to A</Link></p>
      <p><Link to="/b">go to B</Link></p>
    </div>);
};

export default PageHome;
