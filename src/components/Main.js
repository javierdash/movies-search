import React from 'react'

const Main = ({theme, texts, session}) => {
  return (
    <main className={theme} >
      <p>{session}</p>
      <p>{session ? texts.mainWelcome : ""}</p>
      <p>{!session ? texts.mainHello : ""}</p> 
      <p>{texts.mainContent}</p>
    </main>
  )
}

export default Main