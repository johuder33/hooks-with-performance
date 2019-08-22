import React from 'react';
import Heading from './Head';

const Layout = ({ title, children }) => (
  <div>
    <Heading title={title} />
    <div style={{ padding: 20 }}>
      {children}
    </div>
  </div>
);

export default Layout;
