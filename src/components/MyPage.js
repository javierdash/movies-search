import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useEffect, useState } from 'react'

// esta variable afecta a todos los componentes, por eso se lo pasa como props a todos
const initialTheme = "light";

const initialLanguage = "es"

const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
 
  //para manejar el cambio de oscuro a claro
  const [theme, setTheme] = useState(initialTheme)
 
  const [language, setLanguage] = useState(initialLanguage)

  const [texts, setTexts] = useState(translations[language])

  const [session, setSession] = useState(false)

  const handleTheme = (e) => {
    //console.log(e.target.value)
    if(e.target.value === "light") {
      setTheme("light")
      console.log(theme)
    } else {
      setTheme("dark")
      console.log(theme)
    }
  }

  const handleLanguage = (e) => {
    //console.log(e.target.value)
    if(e.target.value === "es") {
      setTexts(translations["es"])
    } else {
      setTexts(translations["en"])
    }
  }

  const handleSession = (e) => {
    session ? setSession(false) : setSession(true)
  }
  
  //console.log(session)

  return (
    <div className="my-page">
      <Header 
      theme={theme} 
      handleTheme={handleTheme} 
      texts={texts} 
      handleLanguage={handleLanguage}
      session={session}
      handleSession={handleSession}
      />
      <Main theme={theme} texts={texts} session={session}/>
      <Footer theme={theme} texts={texts}/>
    </div>
  )
}

export default MyPage