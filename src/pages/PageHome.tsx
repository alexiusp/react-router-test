import * as React from 'react';

export const PageHome: React.FC = () => {
  React.useEffect(() => {
    console.log('PageHome');
  })
  return (<div><h1>Page</h1></div>);
};

export default PageHome;
