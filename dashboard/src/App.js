import React from "react";
import Header from "./components/header";
import FirstSection from "./components/first-section";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import { Container, Row } from "react-bootstrap";
import Paginacao from "./components/paginacao";
import Listagem from "./components/listagem";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <FirstSection />
        <Row>
          <Listagem />          
        </Row>
        <Paginacao />
      </Container>
      <Footer />
    </>
  );
};

export default App;
