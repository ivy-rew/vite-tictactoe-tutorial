

function Square(props: {value:string, onSquareClick:()=>void, won: boolean}) {
  return <button
    className={props.won ? "square won" : "square"} 
    onClick={props.onSquareClick}>{props.value}</button>;
}

/**
 * accessing the property keys with short names
 */
function SquareShortAccess({value, onSquareClick, won}: {value:string, onSquareClick:()=>void, won: boolean}) {
  return <button
    className={won ? "square won" : "square"} 
    onClick={onSquareClick}>{value}</button>;
}

/**
 * explicit type outsdie of the function
 */
type SquareProps = {value: string, onSquareClick: () => void, won: boolean};
function SquareExternalProps({value, onSquareClick, won}: SquareProps) {
  return <button
    className={won ? "square won" : "square"} 
    onClick={onSquareClick}>{value}</button>;
}

/**
 * inject a bunch of properties
 */
function SquareProps({value, won, ...props}: {value:string, onClick:()=>void, won: boolean}) {
  return <button
    {...props} //injects-onClick
    className={won ? "square won" : "square"} 
    >{value}</button>;
}


export default Square