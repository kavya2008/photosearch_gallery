import React from 'react';

const apikey= 'vX5Hl76Zlf-OcavgQbpGj1uSmyBTRIfDnmQIMbswrvg'
export const Api=async()=> {
    try{
        const res=await fetch('https://api.unsplash.com/photos',{
            headers:{
                Authorization:`Client-ID ${apikey}`
            }
        });
        if(!res.ok){
            console.error("failed",res.status)
            return;
        }
    const json= await res.json()
    return json
    }
    catch(error){
        console.error("error in making request")
    }
  };
  export const Searchimg=async(query)=> {
      const url= new URL('https://api.unsplash.com/search/photos')
      url.search=new URLSearchParams({
         
          query:query
      })
    try{
        const res=await fetch(url,{
            headers:{
                Authorization:`Client-ID ${apikey}`
            }
        });
        if(!res.ok){
            console.error("failed",res.status)
            return;
        }
    const json= await res.json()
    return json.results
    }
    catch(error){
        console.error("error in making request")
    }
  };
  
  