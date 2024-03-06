import React, { useState } from 'react'

function Child() {
    const [name,setName]=useState('')
    const person=[1,2,3,4,5,6,7]
    // const obj = {name: 'Alice', age: 29, country: 'Austria'};
    const clicked=()=>{
      setName('sajid')
      console.log(name);
    }
    
    
return(
    <>
  <h1>
        This is Parenet component {name?name:'noName'}

        <button onClick={clicked}>click</button>
      </h1>
    </>
)

}

export default Child