import "./styles.css";
import EmpItem from "./components/EmpItem";

function App() {
  const data_arr = [
    { name: "Pooja", age: 25, address: "Solapur" },
    { name: "Prajwal", age: 18, address: "Pune" }
  ];
  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
      <h3 className="App">****Emp Details ****</h3>
      <EmpItem
        name={data_arr[0].name}
        address={data_arr[0].address}
        age={data_arr[0].age}
      ></EmpItem>
      <EmpItem
        name={data_arr[1].name}
        address={data_arr[1].address}
        age={data_arr[1].age}
      ></EmpItem>
    </div>
  );
}

export default App;
