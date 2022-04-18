import React, { useReducer } from "react";
import axios from "axios";

export const mainContext = React.createContext();

const initState = { todos: [], todoToEdit: null };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return { ...state, todos: action.payload };
    case "GET_TODO_TO_EDIT":
      return { ...state, todoToEdit: action.payload };
    default:
      return state;
  }
};

const MainContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const api = "http://localhost:8000/todos";

  const addTodo = async (newTodo) => {
    await axios.post(api, newTodo);
  };

  const getTodo = async () => {
    const response = await axios(api);
    let action = {
      type: "GET_TODO",
      payload: response.data,
    };
    dispatch(action);
  };

  const delTodo = async (id) => {
    await axios.delete(`${api}/${id}`);
    getTodo();
  };

  const getTodoToEdit = async (id) => {
    const response = await axios(`${api}/${id}`);
    const action = {
      type: "GET_TODO_TO_EDIT",
      payload: response.data,
    };
    dispatch(action);
  };

  const saveEditedTodo = async (editedTodo) => {
    await axios.patch(`${api}/${editedTodo.id}`, editedTodo);
    getTodo();
  };

  return (
    <mainContext.Provider
      value={{
        addTodo: addTodo,
        getTodo: getTodo,
        delTodo: delTodo,
        getTodoToEdit: getTodoToEdit,
        saveEditedTodo: saveEditedTodo,
        todoToEdit: state.todoToEdit,
        todos: state.todos,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContext;
