import React, { FC, useEffect, useState } from 'react'
import EnterTask from './enterTask'
import Header from './header'
import Task from './task'
import {IoMdAddCircleOutline} from "react-icons/io"
import IconContainer from '../generalComponents/icon'
import {DataStore} from 'aws-amplify'
import { ITodo } from '../../interfaces/todo'
import {Todo as TodoModel} from "../../models"
type Props = {
  signOut:any
}
const Todo:FC<Props> = ({signOut}) => {
  const [modal, setModal] = useState<boolean>(false)
  const [data, setData] = useState<any>([])
  const handleModal=()=>{
    setModal(!modal)
  }
  const addData = async (data:ITodo) =>{
    try{
      if(data.title==="" || data.deadLine===null) return 
      await DataStore.save(
        new TodoModel({
          deadLine:data.deadLine,
          title:data.title
        })
      )
    }
    catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    fetchData()
    const subscription = DataStore.observe(TodoModel).subscribe(()=>fetchData())
    return ()=> subscription.unsubscribe()
  },[])
  const fetchData = async() =>{
    try{
      const todoData = await DataStore.query(TodoModel)
      setData(todoData)
      console.log(todoData)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-full py-10 relative bg-[#E6F9FF] flex items-center justify-center h-full'>
      <div className="w-96 shadow-xl relative">
        <Header/>
        {data.map((datum:ITodo)=>
          <Task 
            key={datum.id}
            title={datum.title} 
            deadLine={datum.deadLine}
            id={datum.id}
          />)}
        {!modal&&
        <IconContainer
          onClick={handleModal}
        >
          <IoMdAddCircleOutline size={40} color="#30EEFC"/>
        </IconContainer>}
      </div>
      {modal&&<EnterTask  handleModal={handleModal} addData={addData}/>}

    </div>
  )
}

export default Todo