import React, { useState } from 'react';
import { Paper, Button, Input } from '@material-ui/core';
import axios from 'axios';

const GrantForm = () => {
  const id = localStorage.getItem('id');

  const [form, setForm] = useState({
    user_id: id,
    grant_title: '',
    grant_number: 1,
    grant_status: 1,
    grant_description: '',
    grant_amount: null,
    grant_type: '',
    created_at: new Date()
  });

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  onsubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/api/grants`, form)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Paper className="container">
      <div className="welcome-box">
        <form className="form-welcome">
          <Input
            placeholder="Title"
            type="text"
            value={form.grant_title}
            onChange={handleChange('grant_title')}
            className="input-field"
          />
          <Input
            placeholder="Description"
            type="text"
            value={form.grant_description}
            onChange={handleChange('grant_description')}
            className="input-field"
          />
          <Input
            placeholder="Amount"
            type="number"
            value={form.grant_amount}
            onChange={handleChange('grant_amount')}
            className="input-field"
          />
          <Input
            placeholder="Grant Type"
            type="text"
            value={form.grant_type}
            onChange={handleChange('grant_type')}
            className="input-field"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onsubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default GrantForm;
