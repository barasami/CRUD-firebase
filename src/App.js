import './App.css';
import Form from './Form/Form';
import { useState } from 'react';

function App() {
  const[mytodo,setmyTodo]=useState([])
  const[mytext,setText]=useState('')
  const[title,setTitle]=useState(' ')
  const[date,setDate]=useState(' ')
  

  
 
  return (
    <div className="App">
      <Form
      mytodo={mytodo}
      setmyTodo={setmyTodo}
      mytext={mytext}
      setText={setText}
      title={title}
      setTitle={setTitle}
      date={date}
      setDate={setDate}/>
    </div>
  );
}

export default App;
