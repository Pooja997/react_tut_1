import React, { useState } from "react";

function EmpItem(props) {
  const [name, setName] = useState(props.name);

  function clickHandler() {
    setName("Updated!");
    alert(props.name);
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
      {/* <button className="btnCls" onClick={clickHandler}>
        Update
      </button> */}
    </div>
  );
}

export default EmpItem;
