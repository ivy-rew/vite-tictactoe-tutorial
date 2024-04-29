import { useState } from "react";


function Square({value=null, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default Square