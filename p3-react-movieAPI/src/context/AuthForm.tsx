import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Props = {
  submitTitle: string;
  submit: (email: string, password: string) => void;
  handleClose: any;
};

const AuthForm = ({ submitTitle, submit, handleClose }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      className="d-flex justify-content-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email || !password)
          return alert("Email and Password must be included");
        submit(email, password);
      }}
    >
      <div>
        <div>
          <Form.Control
            type="email"
            placeholder="Email Address"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3 mt-3"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 mt-3"
          />
          <div className="d-flex justify-content-center p-2">
            <Button onClick={handleClose} type="submit" className="d-flex mb-3">
              {submitTitle}
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AuthForm;
