import React from 'react'
import {useRouter} from 'next/router'

function name(){
    const {query}=useRouter()
  console.log("route",query)
  return(
    <div>sample page for {query.name}</div>
  )
}
export default name