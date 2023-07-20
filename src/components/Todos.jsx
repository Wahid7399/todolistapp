import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../Redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      toast.error('Cannot add empty todo!', {
        position: toast.POSITION.TOP_RIGHT
    });
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
      toast.success('Your Todo is successfully added!', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };
  //console.log("props from store", props);
  return (
    <div className="displaytodos">
      <ToastContainer />
      <Heading title={props.title} />

      <div className="addTodos">

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="add-btn"
          onClick={() => add()}
        >
          <GoPlus />
        </motion.button>
        <br />
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);