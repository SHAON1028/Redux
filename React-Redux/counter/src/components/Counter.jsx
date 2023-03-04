import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/counter/actions';

const Counter = () => {
    const count = useSelector((state)=>state.value)

    const dispatch = useDispatch()

    const increment = (value)=>{
        dispatch(INCREMENT(value))
    }
    const decrement = (value)=>{
        dispatch(DECREMENT(value))
    }
    return (
        <> <div class="max-w-xl px-8 py-4 bg-white rounded-lg shadow-md mx-auto mt-10 h-36">


            <p className='text-center text-3xl font-bold'>{count}</p>
            {/* button */}
            <div className='flex justify-evenly mt-10'>
                    <button onClick={()=>increment(5)} className='btn bg-sky-400 p-2  rounded-md'>Increment</button>
                    <button onClick={()=>decrement(5)} className='btn  bg-red-400 p-2 rounded-md'>Decrement</button>
            </div>

            </div>
           
        </>
    );
};

export default Counter;