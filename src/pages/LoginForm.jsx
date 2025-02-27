import { useForm } from "react-hook-form";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = await userService.loginUser(data);
    if (user) {
      console.log("logeado");
      localStorage.setItem("user", JSON.stringify(user.data));
      navigate("/view");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4">
        <Card.Title className="text-center">Iniciar sesión</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              placeholder="Ingrese un email"
              {...register("email", {
                required: "Email requerido",
              })}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              {...register("password", { required: "Contraseña requerida" })}
            />
            <p className="text-danger">{errors.password?.message}</p>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Iniciar sesión
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginForm;
