import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const AddTodo = () => {
  const data = useContext(mainContext);

  const { addTodo } = data;

  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = {
      task: task.trim(),
      date,
      time,
    };
    addTodo(newTodo);
    setTask("");
    setDate("");
    setTime("");
    navigate("/");
  };
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

export default AddTodo;
