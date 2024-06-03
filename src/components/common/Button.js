import React from 'react'
import {Link} from "react-router-dom"

const Button = ({children, active, linkto}) => {
  return (
    
    // <Link to={linkto}>
        <div className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-full w-[200px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] m-auto mt-[80px]
        ${active ? "bg-orange-500 text-white":" bg-orange-400"}
        hover:scale-95 transition-all duration-200 hover:shadow-none
        `}>
            {children}
        </div>

    // </Link>
  )
}

export default Button
