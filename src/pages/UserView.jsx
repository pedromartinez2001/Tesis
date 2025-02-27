import View from "../components/View";
import expenseService from "../services/expenseService";
import incomeService from "../services/incomeService";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs from "dayjs";
import { Container, Row, Col } from "react-bootstrap";
import MiDoughnutChart from "../components/DonnutChart";
//import DonnutChart from "../components/DonnutChart";

const UserView = () => {
  const [fecha, setFecha] = useState(new Date());
  const optionsIngresos = [
    { value: "salario", label: "Salario" },
    { value: "freelance", label: "Trabajo Freelance" },
    { value: "negocio", label: "Ingreso por Negocio" },
    { value: "alquiler", label: "Alquiler de Propiedades" },
    { value: "inversiones", label: "Ingresos por Inversiones" },
    { value: "intereses", label: "Intereses Bancarios" },
    { value: "dividendos", label: "Dividendos" },
    { value: "regalos", label: "Regalos o Donaciones" },
    { value: "bonos", label: "Bonos" },
    { value: "comisiones", label: "Comisiones de Ventas" },
    { value: "otro", label: "Otro" },
  ];

  const optionsGastos = [
    { value: "alquiler", label: "Alquiler" },
    { value: "comida", label: "Alimentación" },
    { value: "transporte", label: "Transporte" },
    { value: "servicios", label: "Servicios Públicos" },
    { value: "salud", label: "Salud" },
    { value: "entretenimiento", label: "Entretenimiento" },
    { value: "ropa", label: "Ropa y Calzado" },
    { value: "educacion", label: "Educación" },
    { value: "ahorro", label: "Ahorro" },
    { value: "deudas", label: "Pago de Deudas" },
    { value: "otro", label: "Otro" },
  ];

  return (
    <Container style={{ padding: " 0.1rem" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Listado de ingresos y gastos
      </h1>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={'"Elije un mes"'}
              openTo="month"
              views={["year", "month"]}
              value={dayjs(fecha)}
              onChange={(value) => setFecha(value)}
            />
          </LocalizationProvider>
        </Col>
        <Col>
          <MiDoughnutChart fecha={fecha} service={expenseService} />
        </Col>
      </Row>
      <Container>
        <Row style={{ justifyContent: "space-between", display: "flex" }}>
          <Col>
            <View
              title={"Ingresos"}
              service={incomeService}
              options={optionsIngresos}
              fecha={fecha}
            />
          </Col>
          <Col>
            <View
              title={"Gastos"}
              service={expenseService}
              options={optionsGastos}
              fecha={fecha}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserView;
