import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dayjs from "dayjs";

const ModalForm = ({ options, onSubmit, title, fecha }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      date: dayjs().format("YYYY-MM-DD"), // Fecha de hoy por defecto
    },
  });
  const minDate = dayjs(fecha).startOf("month").format("YYYY-MM-DD"); // Primer día del mes
  const maxDate = dayjs(fecha).endOf("month").format("YYYY-MM-DD"); // Último día del mes
  const handleClose = () => {
    setShow(false), reset();
  };
  const handleShow = () => setShow(true);

  const handleFormSubmit = (data) => {
    onSubmit(data); // Llama a la función onSubmit pasada como prop
    handleClose(); // Cierra el modal después de enviar
    reset(); // Reinicia el formulario
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Group controlId="formOption">
              <Form.Label>Selecciona una opción</Form.Label>
              <Form.Control
                as="select"
                {...register("category", { required: true })}
              >
                <option value="">Seleccione...</option>
                {options.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formAmount">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese monto"
                {...register("amount", { required: true })}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                min={minDate} // Fecha mínima
                max={maxDate}
                {...register("date")}
              />
            </Form.Group>

            <Button
              style={{ marginTop: "1rem" }}
              variant="primary"
              type="submit"
            >
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalForm;
