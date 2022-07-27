import React, { FC, ReactNode } from 'react'

type Props = {
    children:ReactNode,
    [x:string]:any
}

const Button:FC<Props> = ({children,...rest}) => {
  return (
    <button {...rest} className="bg-[#30EEFC] border-2 py-1 px-3 rounded-lg border-[#30EEFC] hover:scale-105 active:scale-90 transition-all duration-200 ease-linear text-white">{children}</button>
  )
}

export default Button