import { useState } from "react";
import Form from "./components/form";
import Modal from "./components/modal";
import { calcularTriangulo } from "./utils/calc-triangle";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [pAngulos, setPAngulos] = useState<{
    A: number;
    B: number;
    C: number;
  }>({ A: 0, B: 0, C: 0 });
  const [pArea, setPArea] = useState<number>(0);
  const [pPerimetro, setPPerimetro] = useState<number>(0);
  const [pTipo, setPTipo] = useState<string>("");
  const calculationsHandler = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ) => {
    const { angulos, area, perimetro, tipo } = calcularTriangulo(
      x1,
      y1,
      x2,
      y2,
      x3,
      y3
    );
    setModalIsVisible(true);
    setPAngulos(angulos);
    setPArea(area);
    setPPerimetro(perimetro);
    setPTipo(tipo);
  };
  const closeModal = () => {
    setModalIsVisible(false);
  };
  return (
    <div>
      <h1 className="text-center pt-8 text-3xl">
        Calcular propiedades de un triangulo
      </h1>
      <Form onClickForm={calculationsHandler} />;
      {modalIsVisible && (
        <Modal
          angulos={pAngulos}
          area={pArea}
          perimetro={pPerimetro}
          tipo={pTipo}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
