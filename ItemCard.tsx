import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card } from 'react-bootstrap';

const item = () => {
  return (
    <div className="card">
      <Card>
        <Card.Header>Task 1</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
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
export default item;
