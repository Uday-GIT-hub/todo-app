import React from 'react'
import TodoList from './TodoList'

function Form(props) {

    const inputTextHandler = (event) =>
    {
        console.log(event.target.value)
        props.setInputText(event.target.value)
    }
    const submitTodoHandler = (event) =>
    {
        event.preventDefault()
        props.setTodos([...props.todos,{text : props.inputText , completed : false, id : Math.random()*1000}])
        props.setInputText("")
    }
    const statusHandler = (event) =>
    {
        props.setStatus(event.target.value)
    }
    return (
        <form>
            <input type='text' className='todo-input' value ={props.inputText}onChange={inputTextHandler}/>
            <button type='submit' className='todo-button' onClick={submitTodoHandler}><i className='fas fa-plus-square'></i></button>
            <div className='select'>
                <select name='todos' className='filter-todo' onChange ={statusHandler}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
