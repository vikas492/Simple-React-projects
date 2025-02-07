import { useState } from 'react'



function App() {
  const [color , setColor] = useState("olive");
 

  return (
  
   <div className='h-screen w-full duration-100'
   style={{backgroundColor : color}}
   >
    
    <div className='fixed flex flex-wrap justify-center inset-x-0 px-2'>
      <div className='fixed flex flex-wrap justify-center gap-5 bg-white bottom-12 rounded-3xl px-4 py-3' >

  <button onClick={()=>setColor("red")} className=' outline-none px-4 py-1 rounded-full shadow-lg '
  style={{backgroundColor:"red"}} >Red</button>

   <button onClick={()=>setColor("blue")} className=' outline-none px-4 py-1 rounded-full shadow-lg '
  style={{backgroundColor:"blue"}} >blue</button>

<button onClick={()=>setColor("pink")} className=' outline-none px-4 py-1 rounded-full shadow-lg '
  style={{backgroundColor:"pink"}} >pink</button>

<button onClick={()=>setColor("purple")} className=' outline-none px-4 py-1 rounded-full shadow-lg '
  style={{backgroundColor:"purple"}} >purple</button>

<button onClick={()=>setColor("black")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white'
  style={{backgroundColor:"black"}} >black</button>

<button onClick={()=>setColor("white")} className=' outline-none px-4 py-1 rounded-full shadow-lg  '
  style={{backgroundColor:"white"}} >white</button>

   <button onClick={()=>setColor("green")} className=' outline-none px-4 py-1 rounded-full shadow-lg '
  style={{backgroundColor:"green"}} >green</button>



      </div>
    </div>

   </div>
   )
}


export default App
