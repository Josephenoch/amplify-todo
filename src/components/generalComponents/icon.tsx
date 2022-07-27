import React, { FC, ReactNode } from 'react'

type Props ={
    children:ReactNode
    onClick():void
}

const IconContainer:FC<Props> = ({children, onClick}) => {
  return (
    <span
    className="absolute hover:rotate-180 active:rotate-[360deg] -bottom-5 left-[50%] hover:bg-gray-50 rounded-full -translate-x-[50%] transition-all cursor-pointer hover:scale-105 active:scale-90"
    onClick={onClick}
    >
        {children}
    </span>
  )
}

export default IconContainer