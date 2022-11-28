import {createContext, useState} from 'react'

//creamos el contexto
const LanguageContext = createContext()

let initialLanguage = "es"

const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
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
    headerTitle: "My application with Context API",
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

//creamos el proveedor
const LanguageProvider = ({children}) => {

  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(translations[language])

  const handleLanguage = (e) => {
    if(e.target.value === "es") {
      setTexts(translations["es"])
    } else {
      setTexts(translations["en"])
    }
  }

  const data = {handleLanguage, texts}

  return(
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  )
}

export {LanguageProvider}
export default LanguageContext;