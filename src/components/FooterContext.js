import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'

const FooterContext = () => {
  
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);

  return (
    <footer className={theme} texts={texts}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext;