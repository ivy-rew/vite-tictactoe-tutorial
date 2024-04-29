

function Square({value=null, onSquareClick, won}) {
  return <button className={won ? "square won" : "square"} onClick={onSquareClick}>{value}</button>;
}

export default Square