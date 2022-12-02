import React, { useState } from "react";
function EmpForm(props) {
  const [ename, setEname] = useState("");

  function clickHandler(event) {
    console.log(event);
  }

  function nameChange_handler(event) {
    console.log(event.target.value);
    setEname(event.target.value);
  }

  return (
    <div>
      <h1> Employee Details </h1>
      <label>Employee Name: </label>
      <input type="text" onChange={nameChange_handler} name="ename" />
      <br />
      <br />
      <label>Mobile no: </label>
      <input type="text" type="number" />
      <br />
      <br />
      <button className="btnCls" onClick={clickHandler}>
        Update
      </button>
    </div>
  );
}

export default EmpForm;
