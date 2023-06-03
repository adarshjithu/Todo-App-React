import React from 'react';
import { useState } from 'react';

import './App.css'

function App () {

                                     const [toDos,setToDos]=useState([])
                                     const [toDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input onChange={(e)=>setToDo(e.target.value)} type="text" value={toDo} placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{text:toDo,status:true,id:Date.now()}])} className="fas fa-plus"></i>{toDos?console.log(toDos):''}
 
     {console.log(toDos)}
      </div>

      <div className="todos">

        {
            toDos.map((obj)=>{
              if(obj.status)
                return(
                    <div className="todo">

                    <div className="left">
                      <input value={obj.status}  type="checkbox" name="" id="" />
                      <p>{obj.text}</p>
                    </div>
          
                    <div className="right">
                      <i onClick={()=>{
                        setToDos(toDos.filter((e)=>{
                          if(obj.id===e.id){
                            e.status=false
                          }
                          return e
                        }))
                      }} className="fas fa-times"></i>
                    </div>
                  </div>
                )
            })
     }
      </div>
    </div>
  );
}

export default App;