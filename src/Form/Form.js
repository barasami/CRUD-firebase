import React from 'react'
import { useState } from 'react'

function Form() {
    const[mytext,setText]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <div>
            <form onSubmit={submitMe}>
                <div>
                    <input type='text' placeholder='Your Todo...' onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div>
                    <input type='date' onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </div>

    </div>
  )
}

export default Form