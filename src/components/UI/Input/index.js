import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

Input.defaultProps = {
  label: 'Name',
  type: 'text',
  placeholder: 'input Text',
  errorMessage: '',
  onChange: null,
  value: '',
};

export default Input;
