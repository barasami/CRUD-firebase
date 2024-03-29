import React, { useEffect } from 'react'
import { useState } from 'react'
import './Form.css'
import { mydb } from '../Fbase/Fbase'
import {getDocs,collection,addDoc,deleteDoc,doc}from "firebase/firestore"
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
// import EditIcon from '@mui/icons-material/Edit';


function Form({setmyTodo,setText,setTitle,setDate,mytodo,date,title,mytext,ids}) {
    const[load,setload]=useState(false)

    //update

    // const[datess,setDatess]=useState('')
    // const[titless,setTitless]=useState('')
    // const[todoss,setTodoss]=useState('')
    
    // const editMe=(e)=>{
    //     e.preventDefault()
    // }
   
    

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

    const deletedMe=async(ids)=>{

        
        try{
            const myref=doc(mydb,'Todo',ids)
            await deleteDoc(myref)
            getTodos()
        }
        catch (err){
            console.log(err);
        }
    }
    // const updateMe=async(ids)=>{
    //     setOpen(true)
    //     try{
    //         const myref=doc(mydb,'Todo',ids)
    //         await updateDoc(myref,{
    //             Date: datess,
    //             Title:titless ,
    //             Todo: todoss
    //         })
    //         getTodos()
    //     }
    //     catch (err){
    //         console.log(err);
    //     }

    
    // }
   
    useEffect(()=>{
        setload(true)
        getTodos();
        setload(false)
        //eslint-disable-next-line
    },[])

    const mycoolTodo=mytodo?.map((todos)=>{
        return(
            <div key={todos.id} className='myresults'>
                <div className='details'>
                    <div className='dates'>{todos.Date}</div>
                    <div className='mytitle'>{todos.Title}</div>
                    <div className='mytodo'>{todos.Todo}</div>
                    <div className='delete'><DeleteIcon color='error' fontSize='small' onClick={()=>deletedMe(todos.id)}/></div>
                    {/* <div className='edit'><EditIcon fontSize='small' color='success' onClick={()=>updateMe(todos.id)}/></div> */}
                </div>
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
    <> 
    <div className='myform'>
        <div className='coolform'>
            <h3 className='heading'>My Todo</h3>
            <form onSubmit={submitMe} className='form'>
                <div className='input'>
                    <input type='text' className='text' required 
                    placeholder='Todo Title ...' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='date'>
                    <input type='date' className='mydate' 
                    required onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className='input'>
                    <textarea  className='text' required rows={8} cols={53}
                    placeholder='Your Todo...' onChange={(e)=>setText(e.target.value)}/>
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
    </>
  )
}

export default Form