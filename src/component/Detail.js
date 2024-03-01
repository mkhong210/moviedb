import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {
  const [data,setData] = useState([]);
  let {type,id} = useParams(); 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
    .then(res => { setData(res.data) })
  },[])
  
  return (
    <>
      <section className='detail_wrap'>
					<img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
					<p>{data.title}{data.name}</p>
      
      </section>
    </>
  )
}

export default Detail