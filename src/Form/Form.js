import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form() {
    const[mytext,setText]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()
        console.log(mytext);
    }

  return (
    <div className='myform'>
        <div className='coolform'>
            <h3 className='heading'>My Todo</h3>
            <form onSubmit={submitMe} className='form'>
                <div className='input'>
                    <input type='text' className='text' placeholder='Your Todo...' onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className='date'>
                    <input type='date' className='mydate' onChange={(e)=>setText(e.target.value)}/>
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