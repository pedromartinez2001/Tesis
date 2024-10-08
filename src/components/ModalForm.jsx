import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ModalForm = ({ options, onSubmit, title }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0], // Fecha de hoy por defecto
    },
  });

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

            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese descripción"
                defaultValue={" "}
                {...register("description", { required: true })}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" {...register("date")} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalForm;
