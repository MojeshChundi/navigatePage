import React, { useRef } from "react";
import { Navbar, Container } from "react-bootstrap";
import classes from "./ContactUs.module.css";

function ContactUs(props) {
  const nameref = useRef();
  const emailref = useRef();
  const phoneref = useRef();
  const SubmitHandler = async (event) => {
    event.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const phone = phoneref.current.value;
    console.log(name, email, phone);
    const details = {
      name: name,
      email: email,
      phone: phone,
    };

    const response = await fetch(
      "https://react-project-14387-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/jason",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className={classes.cardss}>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">CONTACT US</Navbar.Brand>
        </Container>
      </Navbar>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          className={classes.input}
          type="text"
          id="name"
          ref={nameref}
          placeholder="enter name"
        />
        <label htmlFor="email">E-Mail</label>
        <input
          className={classes.input}
          type="text"
          id="email"
          ref={emailref}
          placeholder="enter email"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          className={classes.input}
          type="text"
          id="phone"
          ref={phoneref}
          placeholder="enter phone number"
        />
        <button className={classes.button}>report problem</button>
      </form>
    </div>
  );
}

export default ContactUs;
