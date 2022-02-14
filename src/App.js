import { useState ,useEffect} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

import { MainContext } from "./contexts/context"


function App() {


  const [theme , setTheme] = useState('light')
  const [methods, setMethods] = useState({})

  const appendMethods = newMethods => {
    setMethods({ 
      ...methods,
      ...newMethods
    })
  }

  useEffect(() => {
    document.body.className = theme
  } , [theme])

  const data = {
    theme, setTheme,
    appendMethods,
    ...methods
  }

  return (
    <MainContext.Provider value={data} className="App">
     <Header />
     <Footer />
    </MainContext.Provider>
  );
}

export default App;
