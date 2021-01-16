import React, { Component } from "react";
import axios from "axios";
import "../styles/my-todo.css";
class MyTodoComponent extends Component {
  state = {
    todoList: [],
  };

  // server se aya [{},{},{},{}]

  componentDidMount() {
    this.getListItems();
  }

  handleDelete = (id) => {
    // console.log(id);
    const currentList = this.state.todoList;
    const updatedList = currentList.filter((list) => {
      return list.id != id;
    });
    console.log(updatedList);
    this.setState({
      todoList: updatedList,
    });
  };
  getListItems = async () => {
    const res = await axios.get(
      "https://api-todo-list-2021.herokuapp.com/getList"
    );
    console.log(res.data);
    this.setState({
      todoList: res.data,
    });
  };

  render() {
    return (
      <div className="container ">
        <ul>
          {this.state.todoList.map((todo) => (
            <li className="card">
              <div className="flex-container   ">
                <p>{todo.title}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyTodoComponent;

//c:/>wbdjb/Todo/
