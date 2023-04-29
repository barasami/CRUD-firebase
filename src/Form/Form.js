import React, { useEffect } from 'react'
import { useState } from 'react'
import './Form.css'
import { mydb } from '../Fbase/Fbase'
import {getDocs,collection,addDoc,deleteDoc,doc}from "firebase/firestore"
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';

function Form() {
    const[mytodo,setmyTodo]=useState([])
    const[mytext,setText]=useState('')
    const[title,setTitle]=useState(' ')
    const[date,setDate]=useState(' ')
    const[load,setload]=useState(false)

    const mycollectionRef=collection(mydb,'Todo')

    const getTodos=async()=>{
            
        try{
            const data=await getDocs(mycollectionRef);
            const myallData=data.docs.map((doc)=>({
                ...doc.data(),id:doc.id
            }))
            setmyTodo(myallData);
        }
        catch(eror){
            console.log(eror);
        };
    }

    const deletedMe=async(id)=>{
        try{
            const myref=doc(mydb,'Todo',id)
            await deleteDoc(myref)
        }
        catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
        setload(true)
        getTodos();
        setload(false)
    },[])

    const mycoolTodo=mytodo?.map((todos)=>{
        return(
            <div key={todos.id} className='myresults'>
                <table>
                    <td className='data'>{todos.Date}</td>
                    <td className='data'>{todos.Title}</td>
                    <td className='data'>{todos.Todo}</td>
                    <td className='data'><DeleteIcon color='error' onClick={()=>deletedMe(todos.id)}/></td>
                    
                </table>
            </div>
        )

    })
    
    const submitMe=async(e)=>{
        e.preventDefault()
       try{
        await addDoc(mycollectionRef,{
            Date:date,
            Title:title,
            Todo:mytext
        })
        getTodos()
       }
       catch (err){
        console.log(err);
       }
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

           <div>
                {load ? <CircularProgress/> : 
                    <div> 
                        {mycoolTodo}
                    </div>
                }
           </div>
            
        </div>

    </div>
  )
}

export default Form