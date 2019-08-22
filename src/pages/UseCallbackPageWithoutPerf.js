import React, { useState, memo } from 'react';
import Layout from '../components/Layout';

const FactoryRenderCounter = () => {
  let counter = 0;
  return () => {
    counter += 1;
    return (
      <div className={'render-counter'}>
        Render by {counter} times
      </div>
    );
  };
}

const RenderCounter = FactoryRenderCounter();

const Test = memo(({ cb }) => {
  return (
    <div>
      <h6>Stats</h6>
      <RenderCounter />
      <button onClick={() => cb('ComparaOnline')}>Tell them my hobbies</button>
    </div>
  );
});

export const PageUseCallbackWithoutPerf = () => {
  const [count, setCount] = useState(0);
  const sayMyHobbie = (hobbie) => alert(`I love JS and ${hobbie}`);

  return (
    <Layout title={'useCallback Hook without performance'}>
      <h6>Counter: {count}</h6>
      <button onClick={() => setCount(count + 1)}>Increment Counter by 1</button>
      <Test cb={sayMyHobbie} />
    </Layout>
  );
}
