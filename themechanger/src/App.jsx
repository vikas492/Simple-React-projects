import { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/Theme'
import './App.css'
import ThemeBtn from './Components/Themebtn/ThemeBtn'
import Card from './Components/Card/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full mx-auto max-w-sm flex justify-end mb-4'>
              <ThemeBtn />
          </div>
          <div className='w-full mx-auto max-w-sm'>
               <Card />
          </div>

        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
