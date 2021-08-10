import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';

import {add,rem} from './redux/reducer/addReducer/addReducer'

function App() {

    const number = useSelector((state:any) => state.number.value)
    const dispatch = useDispatch()

    function btnClick() {
        dispatch(add())
    }

  return (
    <div>
        {console.log(number)}
        {number}
        <button onClick={btnClick}>add</button>
        <button onClick={()=>dispatch(rem())}>remove</button>
    </div>
  );
}

export default App;
