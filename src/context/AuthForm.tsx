// import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Props = {
  submitTitle: string;
  submit: (email: string) => void;
};

const AuthForm = ({ submitTitle, submit }: Props) => {
  const [email, setEmail] = useState("");
  return (
    <Form
      className="d-flex justify-content-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return alert("email must be included");
        submit(email);
      }}
    >
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="name@example.com"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoFocus /> */}
      <Button type="submit">{submitTitle}</Button>
    </Form>
  );
};

export default AuthForm;
