import { useEffect, useState } from "react";
import ModalForm from "../components/ModalForm";
import { Button } from "react-bootstrap";

const View = (props) => {
  const [view, setView] = useState([]);
  useEffect(() => {
    props.service
      .getAll()
      .then((result) => {
        setView(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCreate = (data) => {
    props.service
      .create(data)
      .then((response) => setView(view.concat(response)))
      .catch((error) => console.log(error));
  };
  const handleDelete = (data) => {
    const confirmacion = window.confirm(
      `Esta seguro que quiere eliminar este elemento`
    );
    if (confirmacion) {
      props.service
        .deleteData(data._id)
        .then((response) =>
          setView(view.filter((view) => view._id !== response._id))
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {view.map((view) => (
          <li key={view._id}>
            {view.category}
            <Button variant="danger" onClick={() => handleDelete(view)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <ModalForm
        options={props.options}
        onSubmit={handleCreate}
        title={"Crear"}
      />
    </div>
  );
};

export default View;
