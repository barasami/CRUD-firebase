import React, { useEffect } from 'react'
import { useState } from 'react'
import './Form.css'
import { mydb } from '../Fbase/Fbase'
import {getDocs,collection}from "firebase/firestore"
import DeleteIcon from '@mui/icons-material/Delete';

function Form() {
    const[mytodo,setmyTodo]=useState([])
    const[mytext,setText]=useState('')
    const[title,setTitle]=useState(' ')
    const[date,setDate]=useState(' ')

    const mycollectionRef=collection(mydb,'Todo')

    useEffect(()=>{
        const getTodos=async()=>{
            
            try{
                const data=await getDocs(mycollectionRef);
                const myallData=data.docs.map((doc)=>({
                    ...doc.data(),id:doc.id
                }))
                console.log(myallData);
            }
            catch(eror){
                console.log(eror);
            };
        }
        
        getTodos()
    },[])
    
    const submitMe=(e)=>{
        e.preventDefault()
        console.log(mytext);
        console.log(title);
        console.log(date);
    }

  return (
    <div className='myform'>
        <div className='coolform'>
            <h3 className='heading'>My Todo</h3>
            <form onSubmit={submitMe} className='form'>
                <div className='input'>
                    <input type='text' className='text' required 
                    placeholder='Todo Title ...' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='input'>
                    <input type='text' className='text' required 
                    placeholder='Your Todo...' onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className='date'>
                    <input type='date' className='mydate' 
                    required onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className='submit'>
                    <button className='btn'>Submit</button>
                </div>

            </form>
            
        </div>

    </div>
  )
}

export default Form