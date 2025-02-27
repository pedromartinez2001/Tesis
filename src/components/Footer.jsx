import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "relative",
        width: "100%",
        bottom: "0",
        background: "#ADFF2F",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <p>Pedro Martinez-Proyecto de Tesis de grado</p>
        </Row>
        <Row>
          <p>Encarnación - Paraguay - 2024</p>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
