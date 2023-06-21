import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import {toast} from 'react-toastify'
class ListTodo extends React.Component {
    state =  {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({listTodos: [...this.state.listTodos,todo]});
    }
    updateTodo = (todo) => {
        let items = [...this.state.listTodos];
        items[items.findIndex(item => item.id === todo.id)] = todo;
        this.setState({listTodos: items});
    }
    showEdit = (item) => {
        console.log("<<<<< Check item",item);
        this.setState({editTodo: item});
    }
    handleChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    saveTodo = () => {
        if(this.state.editTodo.title === ''){
            toast.error('Title is not empty');
            return;
        }
        let copyArr = [...this.state.listTodos];
        let index = copyArr.findIndex((item) => item.id === this.state.editTodo.id)
        copyArr[index] = this.state.editTodo;
        this.setState({
            listTodos: copyArr,
            editTodo:{}
        });
        toast.success('Update successful!');

    }
    removeTodo = (todo) => {
        let copyArr = [...this.state.listTodos];
        copyArr = copyArr.filter((item) => item.id != todo.id);
        this.setState({listTodos: copyArr});
        toast.success('Delete successfully!');
    }
    render() {
        let {listTodos} = this.state;
        let obj = this.state.editTodo ;
        let isEmpty = Object.keys(obj).length === 0
        console.log("Check state editTodo",this.state.editTodo);
        console.log("Check empty: ",isEmpty);

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {
                    listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <>
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmpty === false && item.id === this.state.editTodo.id ? 
                                        <>
                                        <input value={this.state.editTodo.title} onChange={(event)=> this.handleChangeTodo(event)} />
                                        <button className="edit" onClick={()=> this.saveTodo()}>Save</button>
                                        </>
                                       
                                        
                                        : 
                                        <>
                                            <span> {index + 1} - {item.title} </span> 
                                            <button className="edit" onClick={() => this.showEdit(item)}>Edit</button>
                                        </>
                                    }
                                   
                                    <button className="delete" onClick={()=> this.removeTodo(item)}>Delete</button>
                                </div>
                                </>
                            )
                        })

                    }
                </div>

            </div>
        )
    }
}
export default ListTodo;