/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import ContextData from '../context/'
import './page.css'

export default function TodoList() {
  const TodoData = useContext(ContextData)
  const { data, setData } = TodoData;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [isEditTodo, setIsEditTodo] = useState(false)

  const addTodo = () => {
    setData(
      [
        ...data,
        {
          name: name,
          lastName: lastName
        }
      ]
    );
    setIsEditTodo(false);
    setName('');
    setLastName('');
  }

  const editTodo = (id) => {
    setIsEditTodo(true);
    data.filter((value, index) => {
      if (index === id) {
        setName(value.name);
        setLastName(value.lastName);
      }
    })
    const tempData = data.filter((value, index) => index !== id);
    setData(tempData);
  }
  
  const deleteTodo = (id)=>{
    const tempData = data.filter((value, index) => index !== id);
    setData(tempData);
  }

  return (
    <div className="tableSetting">
      {isEditTodo &&
        <Form onSubmit={addTodo}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTaskName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
                name='name'
                value={name}
                onChange={Event => setName(Event.target.value)}
                placeholder="Enter Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text"
                name='lastName'
                value={lastName}
                onChange={Event => setLastName(Event.target.value)}
                placeholder="Enter LastName" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* <p className="formError">{formError}</p> */}
        </Form>
      }
      {
        !isEditTodo &&
        <Button variant="primary" onClick={() => setIsEditTodo(true)}>
          Create Todo
        </Button>
      }
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">SNO.</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row"  >{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.lastName}</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-warning mr-2" onClick={() => editTodo(index)}>Edit</button>
                      <button className="btn btn-danger mr-2" onClick={()=> deleteTodo(index)} >Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
