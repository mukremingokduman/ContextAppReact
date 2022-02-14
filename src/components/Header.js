import { MainContext ,useContext } from "../contexts/context"

import { useEffect , useState } from 'react'


function Header() {

    const {theme , appendMethods } = useContext(MainContext)

    const [logoText , setLogoText ] = useState("mukremin")

    useEffect(() => {
        appendMethods({ setLogoText })
    }, [])

  return (
         <div>
             <h3> {logoText} </h3>
             Current themeeeee = {theme}
        </div>
  )
}

export default Header 