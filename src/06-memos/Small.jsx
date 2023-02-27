import React from 'react'
// import { memo } from "react"

export const Small = React.memo(({value}) => {

    console.log("Me volví a generar :(")

  return (
    <small>{ value }</small>
  )
})
