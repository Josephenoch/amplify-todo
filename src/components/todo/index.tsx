import React, { FC, useState } from 'react'
import EnterTask from './enterTask'
import Header from './header'
import Task from './task'
import {IoMdAddCircleOutline} from "react-icons/io"
import IconContainer from '../generalComponents/icon'
const Todo:FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const handleModal=()=>{
    setModal(!modal)
  }
  return (
    <div className='w-full relative bg-[#E6F9FF] flex items-center justify-center h-full'>
      <div className="w-96 shadow-xl relative">
        <Header/>
        <Task/>
        <Task/>
        <Task/>
        {!modal&&
        <IconContainer
          onClick={handleModal}
        >
          <IoMdAddCircleOutline size={40} color="#30EEFC"/>
        </IconContainer>}
      </div>
      {modal&&<EnterTask  handleModal={handleModal}/>}

    </div>
  )
}

export default Todo