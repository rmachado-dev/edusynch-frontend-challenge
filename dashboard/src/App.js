import React from "react";
import Header from "./components/header";
import FirstSection from "./components/first-section";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Item from "./components/item";
import Footer from "./components/footer";
import { Container, Row } from "react-bootstrap";
import Paginacao from "./components/paginacao";

const App = () => {
  return (
    <>
      <Header />

      <Container>
        <FirstSection />
        <Row>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Row>
        <Paginacao />
      </Container>

      <Footer />
    </>
  );
};

export default App;
