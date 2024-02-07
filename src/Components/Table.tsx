import React from 'react'

interface Props{
    url:string,
}

function Table(prop:Props) {
    const src:string =  prop.url
  return (
    <>
      <iframe src={src} width="99%" height="840"></iframe>
    </>
  )
}

export default Table
