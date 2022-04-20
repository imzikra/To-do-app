import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card } from 'react-bootstrap';

const itemCard = (props) => {
  return (
    <div className="card">
      <Card>
        <Card.Header>{props.item.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.item.description}</Card.Text>
          <span>
            <Button variant="success" className="btn_name">
              Edit
            </Button>
          </span>

          <span>
            <Button variant="danger">Delete</Button>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};
export default itemCard;
