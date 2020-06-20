import * as React from 'react';

export const PageA: React.FC = () => {
  React.useEffect(() => {
    console.log('PageA');
  })
  return (<div><h1>Page A</h1></div>);
};

export default PageA;
