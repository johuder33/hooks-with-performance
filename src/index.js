import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from './components/Layout';
import './index.css';

import {
  PageUseStatewithoutPerf,
  PageUseStatewithPerf,
  PageUseContextwithoutPerf,
  PageUseContextwithLittlePerf,
  PageUseContextWithPerf,
  PageUseCallbackWithoutPerf,
  PageUseCallbackWithPerf
} from './pages';

const withLayout = (Component, title) => (props) => (
  <Layout title={title}>
    <Component {...props} />
  </Layout>
)

const links = [
  {
    path: '/use-state-without-perf',
    label: 'Use State Without Performance',
    component: withLayout(PageUseStatewithoutPerf, 'useState Hook')
  },
  {
    path: '/use-state-with-perf',
    label: 'Use State With Performance',
    component: withLayout(PageUseStatewithPerf, 'useState Hook')
  },
  {
    path: '/use-context-without-perf',
    label: 'Use Context Without Performance',
    component: withLayout(PageUseContextwithoutPerf, 'useContext Hook')
  },
  {
    path: '/use-context-with-little-perf',
    label: 'Use Context With Little Performance',
    component: withLayout(PageUseContextwithLittlePerf, 'useContext Hook')
  },
  {
    path: '/use-context-with-perf',
    label: 'Use Context With Performance',
    component: withLayout(PageUseContextWithPerf, 'useContext Hook')
  },
  {
    path: '/use-callback-without-perf',
    label: 'Use Callback Without Performance',
    component: withLayout(PageUseCallbackWithoutPerf, 'useCallback Hook')
  },
  {
    path: '/use-callback-with-perf',
    label: 'Use Callback With Performance',
    component: withLayout(PageUseCallbackWithPerf, 'useCallback Hook')
  },
];

const Menu = () => (
  <div style={{ padding: 10, display: 'flex' }}>
    {links.map(({ path, label }) => <div key={path}><Link to={path}>{label}</Link></div>)}
  </div>
)

function App() {
  return (
    <Router>
      <Route path={'/'} component={Menu} />
      {links.map(({ path, component }, i) => <Route key={i} path={path} component={component} />)}
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
