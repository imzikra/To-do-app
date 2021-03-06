import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'react-bootstrap';
import ItemCard from './ItemCard';
//import { ItemCard } from './ItemCard';
const addItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [item, setItem] = useState({
    title: '',
    description: '',
  });

  const isDataBlank =
    item.title !== '' && item.description !== '' ? false : true;
  const handleDescChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const add = (event: any) => {
    //event.preventDefault();

    //console.log(title);
    setItem({ ...item, title: title, description: description });

    console.log('item' + item);
  };
  return (
    <div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={handleDescChange}
            />
          </Form.Group>
          <span>
            <Button variant="success" onClick={add}>
              Add
            </Button>
          </span>
        </Form>
        <br />
      </div>
      <div> {!isDataBlank && <ItemCard item={item}></ItemCard>} </div>
    </div>
  );
};

export default addItem;
