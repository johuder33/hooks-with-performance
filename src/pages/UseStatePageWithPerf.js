import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import { doingHardWork } from '../helpers';
import { AppContext } from '../context';

const Test = () => {
  const [stats] = useState(() => doingHardWork(500));

  return (
    <div>
      <div className={'cartoon'} />
      <h6>Stats</h6>
      <pre>
        {JSON.stringify(stats, null, 2)}
      </pre>
    </div>
  );
}

export const PageUseStatewithPerf = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState({ bgColor: 'pink' });
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <AppContext.Provider value={themeValue}>
      <Layout title={'useState Hook with performance'}>
        <h6>Counter: {count}</h6>
        <button onClick={() => setCount(count + 1)}>Increment Counter by 1</button>
        <Test />
      </Layout>
    </AppContext.Provider>
  );
}
