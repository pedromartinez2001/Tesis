import View from "../components/View";
import expenseService from "../services/expenseService";
import incomeService from "../services/incomeService";
const UserView = () => {
  const optionsIngresos = [
    { value: "opcion1", label: "Ingreso 1" },
    { value: "opcion2", label: "Opción 2" },
    { value: "opcion3", label: "Opción 3" },
  ];
  const optionsGastos = [
    { value: "opcion1", label: "Gasto 1" },
    { value: "opcion2", label: "Opción 2" },
    { value: "opcion3", label: "Opción 3" },
  ];
  return (
    <div>
      <View
        title={"Ingresos"}
        service={incomeService}
        options={optionsIngresos}
      />
      <View title={"Gastos"} service={expenseService} options={optionsGastos} />
    </div>
  );
};
export default UserView;
