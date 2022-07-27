import React, { FC } from 'react'
import {MdOutlineCancel} from "react-icons/md"
import { Input } from '../generalComponents'
import IconContainer from "../generalComponents/icon"
type Props = {
  handleModal():void
}

const EnterTask:FC<Props> = ({handleModal}) => {
  return (
    <><div className="bg-gray-700 opacity-50 w-screen h-screen absolute top-0 left-0">
    </div>
    <div className='w-96 p-4 rounded-md absolute left-[50%] opacity-100 space-y-10 bg-white top-[50%] h-52 -translate-x-[50%] -translate-y-[50%]'>
    <Input placeholder="Enter Task Title" type="text"/>
    <Input placeholder="Enter Time" type="time"/>
       <IconContainer onClick={handleModal}> <MdOutlineCancel size={40} color="#30EEFC"/></IconContainer>
    </div>
    </>
  )
}

export default EnterTask