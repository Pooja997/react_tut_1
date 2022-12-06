import React, { useState } from "react";

const btnName = "Submit";
function EmpItem(props) {
  //const [btnName, setBtnName] = useState(props.name);
  const [btnName, setBtnName] = useState("Submit");

  function clickHandler() {
    setBtnName("Button Clicked!");
    //alert(props.name);
  }
  return (
    <div>
      <span>
        <b>Emp Name :</b>
      </span>
      <div> {props.name}</div>
      <br />
      <span>
        <b>Emp Age :</b>
      </span>
      <span> {props.age}</span>
      <br />
      <span>
        <b>Emp Address :</b>
      </span>
      <span> {props.address}</span>
      <br />
      <br /> <b>---------------------------------</b>
      <br />
      <br />
      <button className="btnCls" onClick={clickHandler}>
        {btnName}
      </button>
    </div>
  );
}

export default EmpItem;
