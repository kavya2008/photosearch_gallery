import React from 'react';

const Image=({urls , handleclick}) =>{
    
    return (
     <div>
         <li>
         <img src={urls.small} alt='picsum photo' onClick={()=>handleclick(urls.regular)}></img>
         </li>
     </div>
    )
  }
  
  export default Image;