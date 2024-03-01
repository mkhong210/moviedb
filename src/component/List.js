import React from 'react'
import { useParams } from 'react-router-dom'

function List() {
  const param = useParams();
  console.log(param)
  return (
    <>
      <h2>{param.catagory}</h2>
      {/* <h2>{params.id}</h2> */}
    
    </>
  )
}

export default List