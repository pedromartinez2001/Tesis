import { useForm } from "react-hook-form";
import userService from "../services/userService";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => await userService.registerUser(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("username", {
              required: "Nombre de usuario requerido.",
            })}
            type="text"
            placeholder="Nombre de Usuario"
          />
        </div>
        <p className="errorForm">{errors.username?.message}</p>
        <div>
          <input
            {...register("email", {
              required: "Email requerido.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese un correo electrónico válido",
              },
            })}
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
        </div>
        <p className="errorForm">{errors.email?.message}</p>
        <div>
          <input
            {...register("password", {
              required: "Contraseña requerida.",
              minLength: {
                value: 8,
                message: "Contraseña mínima de 8 caracteres.",
              },
            })}
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>
        <p className="errorForm">{errors.password?.message}</p>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
