import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
class AddTodoComponent extends Component {
  state = {
    title: "",
    description: "",
  };

  handleClick = (e) => {
    //Send data to server using some api
    e.preventDefault();
    //validation ka part
    if (this.state.title === "") {
      toast("Title Cannot be empty");
      return;
    }
    if (this.state.description === "") {
      toast("Description Cannot be empty");
      return;
    }

    this.sendDatatoServer();
  };

  sendDatatoServer = () => {};

  handleChange = (e) => {
    let data = {};
    data[e.target.name] = e.target.value;

    this.setState(data);
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Description</label>
            <textarea
              type="text"
              rows="20"
              name="description"
              onChange={this.handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              type="submit"
              onClick={this.handleClick}
              className="btn btn-success"
            >
              Save Todo
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddTodoComponent;
