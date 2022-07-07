import "../Lista.scss";

export default function Item({
  tarefa,
  tempo
}: {
  tarefa: String;
  tempo: String;
}) {
  return (
    <li className="item">
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
