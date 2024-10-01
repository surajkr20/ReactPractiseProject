
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterSlice';

const App = () => {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  const handleIncreament = () =>{
    dispatch(increment());
  }

  const handleDecrement = () =>{
    dispatch(decrement());
  }

  const resetHandler = () =>{
    dispatch(reset());
  }

  return (
    <div>
      <button onClick={handleIncreament}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default App;
