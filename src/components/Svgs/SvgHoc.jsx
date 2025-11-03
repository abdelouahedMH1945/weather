import React from 'react'

export default function SvgHoc(OriginalComponent) {
    const   NewComponent=(props)=>{
      const newProps={
        width:'25px',
        height:'25px',
        color:'#fff',
        ...props
      }  
        return<>
        <OriginalComponent {...props}/>
        </>
    }
  return (
    <>
    </>
  )
}

