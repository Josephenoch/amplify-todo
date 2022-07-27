import React, { FC, useEffect, useState } from 'react'
import EnterTask from './enterTask'
import Header from './header'
import Task from './task'
import {IoMdAddCircleOutline} from "react-icons/io"
import IconContainer from '../generalComponents/icon'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../../graphql/queries'
import { ITodo } from '../../interfaces/todo'
import { createTodo } from '../../graphql/mutations'
const Todo:FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [data, setData] = useState<any>([])
  const handleModal=()=>{
    setModal(!modal)
  }
  const addData = async (data:ITodo) =>{
    try{
      if(data.title==="" || data.deadLine===null) return 
      await API.graphql(graphqlOperation(createTodo,{input:data}))
    }
    catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async() =>{
    try{
      const todoData:any = await API.graphql(graphqlOperation(listTodos) )
      const todos = todoData.data.listTodos.items
      setData(todos)
      console.log(todos)
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