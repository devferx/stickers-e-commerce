import { useState } from 'react'
export const IncreaseButton = () => {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
