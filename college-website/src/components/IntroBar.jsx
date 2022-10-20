import React from 'react'

const IntroBar = (props) => {
  return (
    <div>
        <h1 style={{display:"flex", justifyContent:"center"}}>{props.pageName} Page</h1>
    </div>
  )
}

export default IntroBar