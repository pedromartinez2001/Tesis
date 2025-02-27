import { useEffect, useState } from "react";
import ModalForm from "../components/ModalForm";
import { CloseButton, Table } from "react-bootstrap";
import dayjs from "dayjs";
const View = (props) => {
  const [view, setView] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await props.service.getAll();
        const filteredViews = result.filter((item) =>
          dayjs(item.date).isSame(props.fecha, "month")
        );
        setView(filteredViews);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [props.fecha]);

  const handleCreate = (data) => {
    props.service
      .create(data)
      .then((response) => {
        const updatedViews = [...view, response]; // Nueva línea
        setView(updatedViews); // Actualizado
        const event = new Event("update");
        window.dispatchEvent(event);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (data) => {
    const confirmacion = window.confirm(
      `Esta seguro que quiere eliminar este elemento`
    );
    if (confirmacion) {
      props.service
        .deleteData(data._id)
        .then((response) => {
          const updatedViews = view.filter((view) => view._id !== response._id); // Actualizado
          setView(updatedViews); // Actualizado
          const event = new Event("update");
          window.dispatchEvent(event);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {view.map((view) => (
            <tr key={view._id}>
              <td>{view.category}</td>
              <td>{`Gs. ${view.amount.toLocaleString("es-PY", {
                minimumFractionDigits: 0,
              })}`}</td>
              <td style={{ justifyContent: "center", display: "flex" }}>
                <CloseButton onClick={() => handleDelete(view)} />
              </td>
            </tr>
          ))}
          <tr>
            <td>Total:</td>
            <td>
              {`Gs. ${view
                .reduce((acumulador, view) => acumulador + view.amount, 0)
                .toLocaleString("es-PY", { minimumFractionDigits: 0 })}`}
            </td>
            <td>
              <ModalForm
                options={props.options}
                onSubmit={handleCreate}
                title={"Crear"}
                fecha={props.fecha}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default View;
