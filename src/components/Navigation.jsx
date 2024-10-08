import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  const [newUser, setNewUser] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    setNewUser(user);
  }, [navigate]);
  const closeSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gestion de finanzas</Navbar.Brand>
          <Nav className="me-auto">
            {!newUser && (
              <Container>
                <Row>
                  <Col>
                    <Nav.Link href="/">Inicio</Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link href="/register">Registrarse</Nav.Link>
                  </Col>
                </Row>
              </Container>
            )}
            {newUser && (
              <Container>
                <Navbar.Text>
                  Inicio de sesión de: {newUser.username}
                </Navbar.Text>
                <Button variant="danger" onClick={() => closeSesion()}>
                  Cerrar sesión
                </Button>
              </Container>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
