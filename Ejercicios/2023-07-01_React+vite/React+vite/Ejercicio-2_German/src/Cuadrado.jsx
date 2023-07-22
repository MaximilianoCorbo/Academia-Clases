/* eslint-disable react/prop-types */
function Cuadrado({ color, onClick }) {
  return <div className={`cuadrado ${color}`} onClick={onClick}></div>;
}

export default Cuadrado;
