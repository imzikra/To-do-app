import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'react-bootstrap';

const add = () => {

}
const addItem = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <span>
          <Button variant="success" onClick = {add()}>Add</Button>
        </span>
      </Form>
    </div>
  );
};

export default addItem;
