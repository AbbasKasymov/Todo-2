import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const EditTodo = () => {
  const data = useContext(mainContext);
  const { getTodoToEdit, todoToEdit, saveEditedTodo } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedTodo = {
      ...todoToEdit,
      task: task.trim(),
      date,
      time,
    };
    saveEditedTodo(editedTodo);
    navigate("/");
  };

  useEffect(() => {
    getTodoToEdit(params.id);
  }, []);

  useEffect(() => {
    if (todoToEdit) {
      setTask(todoToEdit.task);
      setDate(todoToEdit.date);
      setTime(todoToEdit.time);
    }
  }, [todoToEdit]);

  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mt-2">
            <FormControl
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Enter task"
            />
          </FormGroup>
          <FormGroup className="mt-2">
            <FormControl
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Enter deadline date"
            />
          </FormGroup>
          <FormGroup className="mt-2">
            <FormControl
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              placeholder="Enter deadline time"
            />
          </FormGroup>
          <Button className="mt-2" style={{ width: "100%" }} type="submit">
            Add todo
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditTodo;
