import { useState } from 'react';

import './Ideas.scss';

const Ideas = () => {
  const [count, changeCount] = useState(0)

  const decrement = () => {
    if (count > 0)
    changeCount(count - 1);
  }
  const increment = () => {
    changeCount(count + 1);
  }
  
  return (

    <div>
      <h1>Ideas page</h1>
      <h2>Son: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Ideas;