import "./Card.css";

function Card(props) {
  const clsName = "borderCls " + props.className;
  //return <h1 className="textCss">Welcome !!</h1>;
  return <div className={clsName}>{props.children}</div>;
}
export default Card;
