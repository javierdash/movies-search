import React from 'react'

const Header = ({theme, handleTheme, texts, handleLanguage, session, handleSession}) => {
  

  return (
    <header className={theme}>
       <h2>{texts.headerTitle}{session}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input type="radio" name="theme" id="light" value="light" onClick={handleTheme}/>
        <label htmlFor="light">{texts.headerLight}</label>
        <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
        <label htmlFor="dark">{texts.headerDark}</label>
        <button onClick={handleSession}>{session  ? texts.buttonLogin : texts.buttonLogout}</button>
    </header>
  )
}

export default Header