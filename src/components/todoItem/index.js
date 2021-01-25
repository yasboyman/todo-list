import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Text from "../Text";
import "react-datepicker/dist/react-datepicker.css";

const TodoItem = ({ todo, submitEdit, submitEditIsComplete, submitDelete }) => {
    const [todoItem, setTodoItem] = useState(todo)
    const [isEdit, setIsEdit] = useState(false)

    const changeDescription = (e) => {
        setTodoItem({
            ...todo,
            description: e.target.value,
        })
    };

    const changeName = (e) => {
        setTodoItem({
            ...todo,
            name: e.target.value,
        })
    };

    const changeComplete = () => {
        submitEditIsComplete(todoItem.id)
    };

    const changeDate = (date) => {
        setTodoItem({
            ...todo,
            completeBy: date.getTime(),
        })
    };

    const getDate = () => {
        const date = new Date(todoItem.completeBy)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    const onEdit = () => {
        isEdit ? submitEdit(todoItem) : setIsEdit(isEdit => !isEdit);
        isEdit && setIsEdit(isEdit => !isEdit);
    }

    return (
        <div style={{ display: 'flex', margin: '20px', padding: '10px', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', backgroundColor: 'whitesmoke', height: '120px', width: '400px', borderRadius: '4px'}}>
            {isEdit ?
                <>
                    <input value={todoItem.name} onChange={changeName}/>
                    <textarea value={todoItem.description} onChange={changeDescription}/>
                    <DatePicker selected={todoItem.completeBy} onChange={date => changeDate(date)} />
                </>
                :
                <>
                    <Text> {todoItem.name}</Text>
                    <Text>{todoItem.description}</Text>
                    {todoItem.completeBy && <Text>Complete by: {getDate()}</Text>}
                </>
            }

            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Text>Complete</Text>
                <input type="checkbox" checked={todo.isComplete} onChange={changeComplete}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <button onClick={onEdit}>{isEdit ? 'Save': 'Edit'}</button>
                <button onClick={() => submitDelete(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
