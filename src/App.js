import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import bg from "./img/bg.png";

function App() {
  let [shoes] = useState(data);
  // console.log(shoes[0].price);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className="">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div className="container">
        <div className="row">
          {shoes.map(( item) => {
            return (
              <div className="col-md-4"key={item.id} >
                <img
                  src={item.image}
                  width="80%" alt={item.title}
                />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
          {/*   
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
