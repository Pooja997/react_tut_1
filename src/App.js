import "./styles.css";
import EmpItem from "./components/EmpItem";
import Card from "./components/Card";
import EmpForm from "./components/EmpForm";

function App() {
  const data_arr = [
    { name: "Pooja", age: 25, address: "Solapur/Pune" },
    { name: "Prajwal", age: 18, address: "Pune/Jule Solapur" },
  ];

  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
      <h3 className="App textCss">****Emp Details ****</h3>

      <Card>
        <EmpItem
          name={data_arr[0].name}
          address={data_arr[0].address}
          age={data_arr[0].age}
        />
        <EmpItem
          name={data_arr[1].name}
          address={data_arr[1].address}
          age={data_arr[1].age}
        />
      </Card>
      <EmpForm></EmpForm>
    </div>
  );
}

export default App;
