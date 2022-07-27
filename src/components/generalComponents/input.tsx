import React, { FC } from 'react'

type Props = {
    [x:string]:any
}

const Input:FC<Props> = ({...all}) => {
  return (
    <input {...all} className="placeholder:text-sm focus:outline-none focus:ring-1 h-12 shadow-lg rounded-lg p-2 bg-gray-300/10 w-full"/>
  )
}

export default Input