import React from 'react';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import { Grid } from './styles';

function Layout({ children }: any) {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
}

export default Layout;
