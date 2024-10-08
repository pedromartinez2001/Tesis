import { useForm } from "react-hook-form";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user.data));
      navigate("/view");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          placeholder="Ingrese un email"
          {...register("email", {
            required: "Email requerido",
            // pattern: {
            //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            //   message: "Ingrese un correo electrónico válido",
            // },
          })}
        />
      </Form.Group>
      <p className="errorForm">{errors.email?.message}</p>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: "Contraseña requerida" })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <p className="errorForm">{errors.password?.message}</p>
      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
