import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ActionTodo } from '../store/TodoSlice'

export const TodoForm = () => {
const [input, setInput] = useState("")
const dispatch = useDispatch()

const getInputValue = (e) => {
 setInput(e.target.value)
}
const submitTodo = (e) => {
 e.preventDefault()
 dispatch(ActionTodo.addTodoList(input))
 setInput("")
}

  return (
    <Form onSubmit={submitTodo}>
     <Input 
       type="text"
       value={input}
       onChange={getInputValue}
       />
     <Button>ADD</Button>
     <Button onClick={() => dispatch(ActionTodo.deleteAllTodos())}>Remove all</Button>
    </Form>
  )
}
const Form = styled.form`
 margin: 20px auto;
 width: 630px;
 margin-bottom: 40px;
`
const Input = styled.input`
 padding: 15px;
 width: 60%;
 border: 1px solid gray;
 border-radius: 10px;
 outline: none;
`
const Button = styled.button`
 padding: 10px;
 border-radius: 10px;
 border: none;
 background-color: #e0ec6e;
 font-weight: 550;
 margin: 10px;

 :hover{
  background-color: #e8f537;
 }
`
