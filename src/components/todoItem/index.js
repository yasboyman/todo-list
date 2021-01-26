import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Text from "../Text";
import "react-datepicker/dist/react-datepicker.css";

// receives data from listContainer via props - renders to the UI - encompassed/ child of listContainer

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
        <div
            className={'todo-box'}
            style={{
                display: 'flex',
                margin: '20px',
                padding: '20px',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                backgroundColor: 'whitesmoke',
                height: isEdit? '180px' : '140px',
                width: '300px',
                borderRadius: '4px',
            }}
        >
            {isEdit ?
                <>
                    <input value={todoItem.name} onChange={changeName}/>
                    <textarea value={todoItem.description} onChange={changeDescription}/>
                    <DatePicker selected={todoItem.completeBy} onChange={date => changeDate(date)} />
                </>
                :
                <>
                    <Text isTitle > {todoItem.name}</Text>
                    <Text>{todoItem.description}</Text>
                    {todoItem.completeBy && <Text>Complete by: {getDate()}</Text>}
                </>
            }

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Text>Complete</Text>
                <div
                    style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: todo.isComplete ? 'green' : 'white',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        margin: '4px',
                        border: '1px solid black'
                    }}
                    onClick={() => submitEditIsComplete(todoItem.id)}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: "space-evenly"}}>
                <button
                    className={'todo-action-button'}
                         onClick={onEdit}>{isEdit ? 'Save': 'Edit'}</button>
                <button
                    className={'todo-action-button'}
                        onClick={() => submitDelete(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
