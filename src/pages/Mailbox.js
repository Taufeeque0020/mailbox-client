import { Button } from "react-bootstrap";
import React, { Fragment } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./Mailbox.css";
import { useSelector } from "react-redux";
const Mailbox = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.clear();
    history.replace("/login");
  };
  const recievedData= useSelector(state=>state.compose.recievedData)
  const unread = recievedData.reduce((acc,val)=>(val.read===false?acc+1:0),0)
  return (
    <Fragment>
      <Nav className="bg-light d-md sidebar navbar">
        <NavbarBrand>MailBox</NavbarBrand>
        <Button variant="warning" onClick={logoutHandler}>
          Logout
        </Button>
      </Nav>
      <Col className=" bg-dark">
        <Navbar className="navbar d-md bg-dark list">
          <NavItem>
            <NavLink className="menu" to="/compose">
              Compose
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="menu" to="/inbox">
              Inbox <span className="unread">{unread} Unread</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="menu" to="/sentmail">
              SentBox
            </NavLink>
          </NavItem>
        </Navbar>
      </Col>
    </Fragment>
  );
};

export default Mailbox;
