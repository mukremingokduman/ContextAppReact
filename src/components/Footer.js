import ThemeSwitcher from "./ThemeSwitcher"
import { MainContext ,useContext } from "../contexts/context"


function Footer() {
   
    const {setLogoText} = useContext(MainContext)
    const switchLogoText = () => {
        setLogoText("gokduman")
    } 

  return (
    <div>
        Footer component<br/>
        <ThemeSwitcher /> <br/>
        <button onClick={switchLogoText}>Switch Logo Text</button>
        </div>
  )
}

export default Footer