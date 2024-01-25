import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useContext, useState } from "react";
import Model from "../modals/SearchModal";
import Model2 from "../modals/LoginModal";
import { Okej } from "../@types";
import { AuthContext } from "../context/AuthContext";

function NavBar({ popular }: { popular: Okej[] }): JSX.Element {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <div className="d-flex justify-content-center" style={{ color: "white" }}>
      <Navbar>
        <Navbar.Brand href="#" style={{ marginRight: "50px", color: "white" }}>
          THE MOVIE WORLD
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1" style={{ color: "white" }}>
            Home
          </Nav.Link>

          <NavDropdown title="More" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="outline-light ms-5" onClick={handleShow}>
          Search
        </Button>
        {!user ? (
          <Button variant="outline-light ms-3" onClick={handleShow2}>
            LOGIN
          </Button>
        ) : (
          <Button variant="outline-light ms-3" onClick={logout}>
            LOGOUT
          </Button>
        )}
        <div className="pt-3 ps-2">{user && <p>Hello: {user.email}</p>}</div>
      </Navbar>
      <Model show={show} handleClose={handleClose} popular={popular} />
      <Model2 show={show2} handleClose={handleClose2} />
    </div>
  );
}

export default NavBar;
