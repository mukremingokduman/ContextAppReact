import { MainContext ,useContext } from "../contexts/context"


function ThemeSwitcher() {

    const {theme , setTheme} = useContext(MainContext)

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
  return (
    <div>
       <button onClick={switchTheme}>Switch theme</button>
    </div>
  )
}

export default ThemeSwitcher