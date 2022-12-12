import React, { useState } from "react";

const btnName = "Submit";
function FormElements(props) {
  /* Start : Approach 1 */
  /*const [fName, setFname] = useState("");
  const [btnName, setBtnName] = useState("Submit");

  function clickHandler() {
    setBtnName("Clicked");
  }

  function changeHandler(event) {
    console.log(event);
    setFname(event.target.value);
  }
  return (
    <div>
      <label>Name : </label>
      <input type="text" onChange={changeHandler} value={fName} />
      <br />
      <br />
      <button className="btnCls" onClick={clickHandler}>
        {btnName}
      </button>
    </div>
  );
}*/
  /* End : Approach 1 */

  /* Start : Approach 2 */
  const [userInput, setUserInput] = useState({
    fName: "",
    //salary: "setSalary",
    btnName: "",
  });

  function setSalary() {}

  function clickHandler() {
    setBtnName("Clicked");
  }

  function setFirstName(event) {
    console.log(event);
    setUserInput({
      ...userInput,
      fName: "Pooja",
    });
  }

  return (
    <div>
      <label>Name : </label>
      <input type="text" onChange={setFirstName} />
      <br />

      <label>Salary : </label>
      <input type="number" onChange={setSalary} />
      <br />

      <br />
      <button className="btnCls" onClick={clickHandler}>
        {btnName}
      </button>
    </div>
  );
}
/* End : Approach 2 */

export default FormElements;
