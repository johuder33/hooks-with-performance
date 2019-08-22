import React, { useState } from 'react';
import Layout from '../components/Layout';
import { doingHardWork } from '../helpers';

const Test = () => {
  const [stats] = useState(doingHardWork(500));

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

export const PageUseStatewithoutPerf = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout title={'useState Hook without performance'}>
      <h6>Counter: {count}</h6>
      <button onClick={() => setCount(count + 1)}>Increment Counter by 1</button>
      <Test />
    </Layout>
  );
}
