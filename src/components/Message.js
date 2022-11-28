import React from 'react'

const Message = ({msg, bgColor}) => {
  
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: bgColor,
    color: "white",
    fontWeight: "bold"
  }
  
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}

export default Message