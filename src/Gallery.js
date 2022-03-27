import React, { useEffect, useState } from 'react';
import {Api} from './Api';
import {Searchimg} from './Api'
import Image from './Image';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
const customStyles = {
   content: {
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
     
   },
 };
const Gallery=({query})=> {
    const[imglist,setimglist]=useState([])
    const[currentimg,setimg]=useState(null)
    useEffect(()=>{
       Api().then(data=>{
    setimglist(data)
    console.log(data)
    console.log(imglist)
    }
       )
    },[])
    useEffect(async()=>{
       if(query.trim()==""){
          return;
       }
       const data=await Searchimg(query)
       setimglist(data)
       console.log(data)
    },[query])
    Modal.setAppElement('#root');
    return (
     <div>
        <Modal style={customStyles} isOpen={!!currentimg} onRequestClose={()=>setimg( null)}>
           <img src={currentimg} className="pre"></img>
        </Modal>
        {imglist.length==0?<h2>No Images Found</h2>:null}
       <Masonry className='gridcntain' options={{isFitWidth:true}}>
            {
                
                imglist.map(img=>{
                    return<Image urls={img.urls} key={img.id} handleclick={setimg}></Image>})
                   
            }
         </Masonry>
        
     </div>
    )
  }
  
  export default Gallery;
  