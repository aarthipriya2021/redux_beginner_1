import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const resetAll =() =>{
        setIncrementAmount(0);
        dispatch(reset())
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button><br />
        <input 
        type='text' 
        value={incrementAmount} 
        onChange={e => setIncrementAmount(e.target.value)} 
        />

        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        </div>
        <button className='reset-btn' onClick={() => dispatch(resetAll())}>Reset</button>
    </div>
  )
}

export default Counter