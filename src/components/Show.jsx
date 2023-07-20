import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    addTodos,
    completeTodos,
    removeTodos,
    updateTodos,
} from "../Redux/reducer";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";
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
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

export const Show = (props) => {
    const [todos, setTodos] = useState([]);
    const [sort, setSort] = useState("active");
    useEffect(() => {
        setTodos(props.todos);
        setSort(props.sort)
    }, [props]);
    
    return (
        <div className="displaytodos">
            <ToastContainer />
            <Heading title={props.title} />
            <ul>
                <AnimatePresence>
                    {(todos.length > 0 && sort === "active")
                        ? todos.map((item) => {
                            return (
                                item.completed === false && item.item.toLowerCase().includes(props.search.toLowerCase())&&(
                                    
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                )
                            );
                        })
                        : null}
                    {/* for completed items */}
                    {todos.length > 0 && sort === "completed"
                        ? todos.map((item) => {
                            return (
                                item.completed === true && item.item.toLowerCase().includes(props.search.toLowerCase())&&(
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                )
                            );
                        })
                        : null}
                    {/* for all items */}
                    {todos.length > 0 && sort === "all"
                        ? todos.map((item) => {
                            return (
                                item.item.toLowerCase().includes(props.search.toLowerCase())&& (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />)
                            );
                        })
                        : null}
                </AnimatePresence>
            </ul>

        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
