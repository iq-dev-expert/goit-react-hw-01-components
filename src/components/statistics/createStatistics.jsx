export default function createStatistics({ id, fileExtension, percent }) {
  return (
    <li className="item" key={id}>
      <span className="label">{fileExtension}</span>
      <span className="percentage">{percent}</span>
    </li>
  );
}
