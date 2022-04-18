import React, { useContext, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const MainPage = () => {
  const data = useContext(mainContext);

  const { getTodo, todos, delTodo } = data;

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Container>
      <h1>Todo`s</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo task</th>
            <th>Deadline date</th>
            <th>Deadline time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.task}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <Link to={`/edit-todo/${item.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => delTodo(item.id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MainPage;
