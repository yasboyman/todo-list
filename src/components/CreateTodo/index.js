import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import Text from "../Text";

const CreateTodo = ({ submitCreate }) => {
    const [showCreate, setShowCreate] = useState(false)
    const initialState = {
        name: '',
        description: '',
        completeBy: null,
    }
    const [todo, setTodo] = useState(initialState)

    const onChangeTodoText = (e, type) => {
        setTodo({
            ...todo,
            [type]: e.target.value,
        })
    }


    const changeDate = (date) => {
        setTodo({
            ...todo,
            completeBy: date.getTime(),
        })
    };

    const onSubmit = () => {
        submitCreate(todo);
        setShowCreate(showCreate => !showCreate);
        setTodo(initialState)
    }

    return (

        //Button to start creating To Do //
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {!showCreate && <button
                onClick={() => setShowCreate(showCreate => !showCreate)}
                className={'showCreate-button'}
            >Create To-do </button>}

             {/*Div to input To Do if button above is clicked*/}
            {showCreate && <div className={'showCreate-div'}>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4px' }}>
                    <Text>Title: </Text>
                    <input value={todo.name} onChange={(e) => onChangeTodoText(e, 'name')}/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4px' }}>
                    <Text>Description: (optional)</Text>
                    <textarea value={todo.description} onChange={(e) => onChangeTodoText(e, 'description')}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4px' }}>
                    <Text>Complete By: (optional) </Text>
                    <DatePicker selected={todo.completeBy} onChange={date => changeDate(date)} />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <button onClick={onSubmit} disabled={!todo.name.length}>Create</button>
                    <button onClick={() => setShowCreate(showCreate => !showCreate)}>Cancel</button>
                </div>
            </div>
            }
        </div>
    );
};

export default CreateTodo;
