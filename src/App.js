import './App.css';
import Form from './Form/Form';
import { useState } from 'react';
import Update from './Update/Update';

function App() {
  const[titles,updateTitle]=useState('')   
  const[dates,updateDate]=useState('')
  const[todos,updateTodo]=useState('')

 
  return (
    <div className="App">
      <Form/>
      <Update
      titless={titles}
      updateTitle={updateTitle}
      datess={dates}
      updateDate={updateDate}
      todoss={todos}
      updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
