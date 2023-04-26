import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function Categories({ setCategory }) {
  const handleClick = (e) => {
    const { id } = e.target;
    setCategory(id);
  };

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="all"
      className="border-bottom-0 justify-content-center"
    >
      <Nav.Item>
        <Nav.Link id="all" eventKey="all" as="button" onClick={handleClick}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="electronics"
          eventKey="electronics"
          as="button"
          onClick={handleClick}
        >
          Electronics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="jewelery"
          eventKey="jewelery"
          as="button"
          onClick={handleClick}
        >
          Jewelery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="men's clothing"
          eventKey="men's clothing"
          as="button"
          onClick={handleClick}
        >
          Men's Clothing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="women's clothing"
          eventKey="women's clothing"
          as="button"
          onClick={handleClick}
        >
          Women's Clothing
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Categories;
