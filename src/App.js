import './App.css';
import Form from './Form/Form';
import { useState } from 'react';
import Update from './Update/Update';

function App() {
  const[titles,updateTitle]=useState('')   
  const[dates,updateDate]=useState('')
  const[todos,updateTodo]=useState('')
  const[isopen,setIsopen]=useState(false)

 
  return (
    <div className="App">
      <Form
      titless={titles}
      datess={dates}
      todoss={todos}
      isopen={isopen}
      setIsopen={setIsopen}/>
      <Update
      titless={titles}
      updateTitle={updateTitle}
      datess={dates}
      updateDate={updateDate}
      todoss={todos}
      updateTodo={updateTodo}
      setIsopen={setIsopen}/>
    </div>
  );
}

export default App;
