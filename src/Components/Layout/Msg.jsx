import { useState, useEffect } from "react";

import style from './Msg.module.css'

function Msg({type, message}){
  
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    
    if(!message){
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [message])


  return(
    <>
      {visible && (
        <div className={`${style.msg} ${style[type]}`}> {message} </div>
      )}
    </>
  )

}

export default Msg