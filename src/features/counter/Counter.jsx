import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function CounterComponent() {
    const count = useSelector((state) => state.counter.value); // Corrected to value
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <div className='addNumber'>
                <button className='increment' onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button className='decrement' onClick={() => dispatch(decrement())}>-</button> {/* Corrected label */}
            </div>
            <br/>
            <div>
                <input type="number" id="amountInput" placeholder='Enter Value'/>
                <button className='addAmount' onClick={() => {
                    const value = parseInt(document.getElementById('amountInput').value) || 0;
                    dispatch(incrementByAmount(value));
                }}>Add Amount</button>
                <br/>
                <br/>
                <button className='add2' onClick={() => dispatch(incrementByAmount(2))}>Add 2</button>
            </div>
        </div>
    );
}

export default CounterComponent;
