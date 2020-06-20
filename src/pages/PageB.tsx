import * as React from 'react';

export const PageB: React.FC = () => {
  React.useEffect(() => {
    console.log('PageB');
  })
  return (<div><h1>Page B</h1></div>);
};

export default PageB;
