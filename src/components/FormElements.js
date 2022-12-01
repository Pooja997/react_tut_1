function FormElements(props) {
  //const [title, setTitle] = useState(props.name);
  function clickHandler() {
    alert(props.name);
  }

  return (
    <button className="btnCls" onClick={clickHandler}>
      Update
    </button>
  );
}

export default FormElements;
