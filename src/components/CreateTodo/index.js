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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {!showCreate && <button onClick={() => setShowCreate(showCreate => !showCreate)}>Create Todo</button>}
            {showCreate && <div style={{
                display: 'flex',
                margin: '20px',
                padding: '10px',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                backgroundColor: 'lightblue',
                height: '120px',
                width: '400px',
                borderRadius: '4px'
            }}>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Title: </Text>
                    <input value={todo.name} onChange={(e) => onChangeTodoText(e, 'name')}/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Description: (optional)</Text>
                    <textarea value={todo.description} onChange={(e) => onChangeTodoText(e, 'description')}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Complete By: (optional) </Text>
                    <DatePicker selected={todo.completeBy} onChange={date => changeDate(date)} />
                </div>
                <div style={{ display: 'flex'}}>
                    <button onClick={onSubmit}>Create</button>
                    <button onClick={() => setShowCreate(showCreate => !showCreate)}>Cancel</button>
                </div>
            </div>
            }
        </div>
    );
}

export default CreateTodo;
