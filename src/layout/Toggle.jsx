import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import "../App.css"

const Toggle = () => {
    const {theme ,setTheme} = useContext(ThemeContext)
  return (
    <div className='switch'>
            {
                theme === "dark" ? (
                    
                    <div onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
                        <i className='bi bi-sun-fill text-light'><span className='mx-2'>Light Mode</span></i>
                    </div>
                    
                ) : (

                    <div onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
                    <i className='bi bi-moon-fill text-dark'><span className='mx-2'>Dark Mode</span></i>
                    </div>

                )
            }
    </div>
  )
}

export default Toggle