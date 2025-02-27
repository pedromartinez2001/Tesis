import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navigation = () => {
  const [newUser, setNewUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const token = Cookies.get("token");
  const navigate = useNavigate();

  // Función para decodificar el token y verificar si está expirado
  const isTokenValid = (token) => {
    if (!token) return false;
    try {
      // Extraer y decodificar la parte del payload del JWT
      const payload = JSON.parse(atob(token.split(".")[1]));
      // Verificar si el token ha expirado (exp está en segundos, Date.now() en ms)
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      console.log(error);
      return false; // Si hay un error, el token no es válido
    }
  };

  // Función para cerrar sesión
  const closeSesion = () => {
    localStorage.clear();
    Cookies.remove("token");
    setNewUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setNewUser(user);

    // Validar el token al cargar el componente
    if (!token || !isTokenValid(token)) {
      closeSesion();
    }
  }, [navigate, token]);

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="md"
      className="p-3 ps-sm-4 ps-2"
    >
      <Navbar.Brand style={{ paddingLeft: "1rem" }} href="/home">
        Gestion de finanzas
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Nav.Link href="/">Inicio</Nav.Link>
          {!token && !newUser ? (
            <>
              <Nav.Link href="/login">Iniciar sesión</Nav.Link>
              <Nav.Link href="/register">Registrarse</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/view">Ingresos y gastos</Nav.Link>
              <Nav.Link href="/">¿Puedo sacar un crédito?</Nav.Link>
              <Nav.Link href="/">Consejos</Nav.Link>
              <Navbar.Text>Bienvenido: {newUser?.username} </Navbar.Text>
              <Button variant="danger" onClick={closeSesion}>
                Cerrar sesión
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
