import React, { useState, useContext, memo } from 'react';
import Layout from '../components/Layout';
import { AppContext } from '../context';

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

const Test = memo(() => {
  const context = useContext(AppContext);
  return (
    <div style={{ backgroundColor: context.theme.bgColor, padding: 30 }}>
      <h6>Stats</h6>
      <RenderCounter />
      <button onClick={() => context.setTheme({ bgColor: '#3f888f' })}>Change theme to Turquoise</button>
    </div>
  );
});

export const PageUseContextwithLittlePerf = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState({ bgColor: 'pink' });
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <Layout title={'useContext Hook with a little performance'}>
        <h6>Counter: {count}</h6>
        <button onClick={() => setCount(count + 1)}>Increment Counter by 1</button>
        <Test />
      </Layout>
    </AppContext.Provider>
  );
}
