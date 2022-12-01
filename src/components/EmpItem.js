function EmpItem(props) {
  const empname = "Pooja";
  return (
    <div>
      <span>
        <b>Emp Name :</b>
      </span>
      <span> {props.name}</span>
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
    </div>
  );
}

export default EmpItem;
