import './Update.css'

function Update({updateTitle,updateDate,updateTodo}) {
    const submitMe=async(e)=>{
        e.preventDefault()
    } 
    
  return (
    <div className='myform'>
        <div className='coolform'>
            <h3 className='heading'>Update Todo</h3>
            <form onSubmit={submitMe} className='form'>
                <div className='input'>
                    <input type='text' className='text' required 
                    placeholder='Todo Title ...' onChange={(e)=>updateTitle(e.target.value)}/>
                </div>
                <div className='date'>
                    <input type='date' className='mydate' 
                    required onChange={(e)=>updateDate(e.target.value)}/>
                </div>
                <div className='input'>
                    <textarea  className='text' required rows={8} cols={53}
                    placeholder='Your Todo...' onChange={(e)=>updateTodo(e.target.value)}/>
                </div>
                <div className='submit'>
                    <button className='btn' >Update</button>
                </div>

            </form>
            
        </div>

    </div>
  
  )
}

export default Update