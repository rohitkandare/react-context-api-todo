import React, {  useState } from "react";
import TodoList from '../todo/TodoList';
import ContextData from './index';

const TodoContext = () => {
  const initialState = [{
    name: "Rohit",
    lastName: "Kandare"
  }]

  const [data, setData] = useState(initialState)

  const TodoData = {
    data : data ,
    setData : setData
  }
  return (
    <ContextData.Provider value={TodoData}>
      <TodoList />
    </ContextData.Provider> 
  )
}

export default TodoContext

