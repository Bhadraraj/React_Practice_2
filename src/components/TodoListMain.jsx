import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAddItem from './TodoAddItem';


function TodoListMain() {
    const [courseList, setCourse] = useState(

        // JSON.parse(localStorage.getItem('todo_list'))

        [{
            id: 1,
            checked: true,
            course: "HTML",
        },
        {
            id: 2,
            checked: true,
            course: "CSS",
        },
        {
            id: 3,
            checked: false,
            course: "JAVA SCRIPT",
        },
        {
            id: 4,
            checked: true,
            course: "REACT JS",
        },
        ]
    )
    const [newItem, setNewItem] = useState('');
    const addItem = (course) => {
        const id = courseList.length ? courseList[courseList.length - 1].id + 1 : 1;
        const addNewItem = { id, checked: false, course };
        const listItem = [...courseList, addNewItem];
        setCourse(listItem)
        localStorage.setItem("todo_list", JSON.stringify((listItem)))


    }
    const handleSubmit = (e) => {
        console.log("Submited")
        e.preventDefault()
        if (!newItem) return console.log("No data");
        console.log(newItem)
        addItem(newItem)
        setNewItem('');
    }

    const handleDel = (id) => {
        const listItems = courseList.filter(item => item.id !== id);

        setCourse(listItems)
        localStorage.setItem("todo_list", JSON.stringify((listItems)))

    }
    const handleCheck = (id) => {
        // console.log(id)
        const listItems = courseList.map(item => item.id === id ?
            { ...item, checked: !item.checked } : item)
        setCourse(listItems)
        localStorage.setItem("todo_list ", JSON.stringify((listItems)))

    }

    
    return (
        <>
            <TodoAddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            <TodoList handleCheck={handleCheck}
                handleDel={handleDel}
                courseList={courseList} />
        </>
    )
}
export default TodoListMain;