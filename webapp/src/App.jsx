/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout';
// import Sidebar from './components/Sidebar';
import normalize from 'normalize.css';

function App() {
  return (
    <>
      <Switch>
        <Route path={['/', '/backtests/:id', '/workspace', '/explore']} exact>
          <AppLayout>
            <AppLayout.Side>{/* <Sidebar /> */}</AppLayout.Side>
            <AppLayout.Main>
              {/* <Switch>
              <Route path={['/', '/lab', '/backtests/:id']} exact>
                <Lab />
              </Route>
              <Route path="/workspace">
                <Workspace />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>
            </Switch> */}
            </AppLayout.Main>
          </AppLayout>
        </Route>
      </Switch>
      <Global styles={globalStyle} />
    </>
  );
}

const globalStyle = css`
  ${normalize}
`;

export default App;
