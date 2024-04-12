interface Props {
  angulos: { A: number; B: number; C: number };
  tipo: string;
  area: number;
  onClose: () => void;
  perimetro: number;
}
const Modal: React.FC<Props> = (props) => {
  const closeHandler = () => {
    props.onClose();
  };
  return (
    <div className="bg-[#0004] absolute w-full h-screen top-0 left-0">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white rounded-lg p-8 w-[50%]">
        <p className="text-center text-2xl text-black ">Resultados</p>
        <p>Area: {props.area.toFixed(2)}</p>
        <p>Perimetro: {props.perimetro.toFixed(2)}</p>
        <p>Tipo: {props.tipo}</p>
        <p>
          Angulos: A = {props.angulos.A.toFixed(2)}, B ={" "}
          {props.angulos.B.toFixed(2)}, C = {props.angulos.C.toFixed(2)}
        </p>
        <button
          className="group relative pt-4 block mx-auto focus:outline-none focus:ring"
          onClick={closeHandler}
        >
          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Cerrar
          </span>
        </button>
      </div>
    </div>
  );
};
export default Modal;
