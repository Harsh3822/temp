import {useState} from 'react'
import './App.css';
function App() 
{

  const [value,setvalue]= useState(10);
  const [color,setcolor]= useState('cold');

  function add()
  {
     const newval = value+1;

    if(newval >= 15)
    {
       setcolor('hot')
    }
    setvalue(newval)
  }

  function sub()
  {
     const newval = value-1;

    if(newval < 15)
    {
       setcolor('cold')
    }
    setvalue(newval)
  }
  return (
    <div className="App">
     <h1>Temp . </h1>
     <div className='valy'>
      <h2 className={`${color}`}>{value} °C</h2>
      </div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
}

export default App;
