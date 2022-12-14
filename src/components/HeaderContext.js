import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

const HeaderContext = () => {
  
  //desestructuramos aquellas variables (las extraemos del contexto) y funciones que queramos utilizar.
  //desde el contexto que fueron creadas!
  const {theme, handleTheme} = useContext(ThemeContext);
  const {handleLanguage, texts} = useContext(LanguageContext);
  const {handleAuth, auth} = useContext(AuthContext);

  return (
    <header className={theme}>
       <h2>{texts.headerTitle}{auth}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input type="radio" name="theme" id="light-context" value="light" onClick={handleTheme}/>
        <label htmlFor="light-context">{texts.headerLight}</label>
        <input type="radio" name="theme" id="dark-context" value="dark" onClick={handleTheme}/>
        <label htmlFor="dark-context">{texts.headerDark}</label>
        <button onClick={handleAuth}>{auth  ? texts.buttonLogin : texts.buttonLogout}</button>
    </header>
  )
}

export default HeaderContext