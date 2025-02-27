import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Container } from "react-bootstrap";
import dayjs from "dayjs";

Chart.register(...registerables, ChartDataLabels);

const MiDoughnutChart = (props) => {
  const [gastos, setGastos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await props.service.getAll();
        const filteredViews = result.filter((item) =>
          dayjs(item.date).isSame(props.fecha, "month")
        );
        setGastos(filteredViews);
        console.log(filteredViews);
      } catch (err) {
        console.log(err);
      }
    };
    window.addEventListener("update", fetchData);

    // Cleanup: Remover el listener cuando el componente se desmonte
    fetchData();
    return () => {
      window.removeEventListener("update", fetchData);
    };
  }, [props.fecha]);
  const necesidades = gastos.filter(
    (gasto) =>
      gasto.category === "alquiler" ||
      gasto.category === "comida" ||
      gasto.category === "transporte" ||
      gasto.category === "servicios" ||
      gasto.category === "salud" ||
      gasto.category === "educacion"
  );
  const totalNecesidades =
    necesidades.reduce((total, gasto) => total + gasto.amount, 0) || 0;

  const deseos = gastos.filter(
    (gasto) =>
      gasto.category === "entretenimiento" ||
      gasto.category === "ropa" ||
      gasto.category === "otro"
  );
  const totalDeseos =
    deseos.reduce((total, gasto) => total + gasto.amount, 0) || 0;

  const ahorros = gastos.filter(
    (gasto) => gasto.category === "ahorro" || gasto.category === "deudas"
  );
  const totalAhorros =
    ahorros.reduce((total, gasto) => total + gasto.amount, 0) || 0;

  const totalGastos = totalNecesidades + totalDeseos + totalAhorros;
  const hasData = totalGastos > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nuevosGastos =
          (await JSON.parse(localStorage.getItem("Gastos"))) || [];
        setGastos(nuevosGastos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.fecha]);

  const data = hasData
    ? {
        labels: ["Necesidades", "Deseos", "Ahorros"],
        datasets: [
          {
            label: "Distribución de Gastos",
            data: [totalNecesidades, totalDeseos, totalAhorros],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      }
    : {
        labels: ["Sin datos"],
        datasets: [
          {
            label: "Sin datos",
            data: [100], // Valor predeterminado para llenar el gráfico
            backgroundColor: ["#e0e0e0"], // Color gris o cualquier otro para el gráfico vacío
            hoverOffset: 4,
          },
        ],
      };
  const options = {
    plugins: {
      datalabels: {
        formatter: (value) => {
          if (!hasData) return ""; // No mostrar etiquetas si no hay datos
          const percentage = ((value / totalGastos) * 100).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  };

  return (
    <Container style={{ minHeight: "20rem", maxWidth: "20rem" }}>
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default MiDoughnutChart;
