import {createContext, useState} from 'react'

//creamos el contexto
const ThemeContext = createContext()

const initialTheme = "light";

//creamos el proveedor
const ThemeProvider = ({children}) => {
 
  const [theme, setTheme] = useState(initialTheme)
 
  const handleTheme = (e) => {
    if(e.target.value === "light") {
      setTheme("light")
      //console.log(theme)
    } else {
      setTheme("dark")
     // console.log(theme)
    }
  }

  //en este objeto data se agregan los valores que necesitamos manejar para funcionar
  //los datos que queremos compartir en el resto de los componentes
 const data = {
   theme, handleTheme
 }

  return(
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider}
export default ThemeContext;