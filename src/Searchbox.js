import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
function Searchbox({val,setval}) {
   
    return (
     
        <DebounceInput minLength={2}
        debounceTimeout={300}
        type="text" placeholder="search..." className='inp' value={val} 
        
        onChange={e=>setval(e.target.value)}></DebounceInput>
    )
  }
  
  export default Searchbox;
  