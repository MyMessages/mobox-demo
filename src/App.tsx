// src/App.tsx
import React from 'react';
import { observer } from 'mobx-react-lite'; // 导入 observer
import { useStore } from './store';
import './App.css'; // 导入样式

// 使用 observer 包装组件，使其响应 observable 变化
const App = observer(() => {
  const { counter, car } = useStore();

  return (
    <div className="App">
      <header className="App-header">
        <p>Count -- count: {counter.count}</p>
        <p>Count -- double: {counter.double}</p>
        <p>car--{car.list.join(', ')}</p>
        <button onClick={counter.increment}>Click +1</button>
        <button onClick={counter.incrementAsync}>Click +1 (async)</button>
        <button onClick={counter.decrement}>Click -1</button>
        <button onClick={counter.reset}>Click reset</button>
      </header>
    </div>
  );
});

export default App;