import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

const MainContext = () => {
  
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);
  const {auth} = useContext(AuthContext);

  return (
    <main className={theme} >
      <p>{auth}</p>
      <p>{auth ? texts.mainWelcome : ""}</p>
      <p>{!auth ? texts.mainHello : ""}</p> 
      <p>{texts.mainContent}</p>
    </main>
  )
}

export default MainContext