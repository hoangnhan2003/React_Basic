import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state = {
        title: ""
    }
    handleAddTodo = () => {
        this.props.addNewTodo({
            id: Math.floor(Math.random() *1000),
            title: this.state.title
        })
        toast.success('Add success!')
        
    }
    handleOnChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }
    render() {
        let {title} = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}
export default AddTodo;