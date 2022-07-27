import React, { ChangeEvent, FC, useState } from 'react'
import {MdOutlineCancel} from "react-icons/md"
import { ITodo } from '../../interfaces/todo'
import { Input } from '../generalComponents'
import {Button} from '../generalComponents'
import {IconContainer} from "../generalComponents"
type Props = {
  handleModal():void
  addData(data:ITodo):void
}


const EnterTask:FC<Props> = ({handleModal, addData}) => {
  const [userInput,setUserInput] =useState<ITodo>({} as ITodo )
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target
    setUserInput(prevState=>{
      return {...prevState,[name]:value}
    })
  }
  const handleSubmit = async ()=>{
    await addData(userInput)
    setUserInput({}as ITodo)
    handleModal()
  }
  return (
    <><div className="bg-gray-700 opacity-50 w-screen h-screen absolute top-0 left-0">
    </div>
    <div 
      className='w-96 p-4 rounded-md absolute left-[50%] opacity-100 space-y-5 bg-white top-[50%] h-52 -translate-x-[50%] -translate-y-[50%]'>
      <Input 
        name="title" 
        onChange={(e:ChangeEvent<HTMLInputElement>)=>changeHandler(e)} 
        placeholder="Enter Task Title" 
        type="text"
      />
    <Input 
      name="deadLine" 
      onChange={(e:ChangeEvent<HTMLInputElement>)=>changeHandler(e)} 
      type="time"
    />
    <Button onClick={handleSubmit}>Submit</Button>
       <IconContainer 
        onClick={handleModal}> 
          <MdOutlineCancel size={40} color="#30EEFC"/>
        </IconContainer>
    </div>
    </>
  )
}

export default EnterTask