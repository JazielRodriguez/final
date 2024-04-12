export function calcularTriangulo(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
) {
  const ab = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const ac = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
  const bc = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);

  // Triangle type
  let tipo = "Escaleno";
  if (ab === ac && ac === bc) {
    tipo = "Equilátero";
  } else if (ab === ac || ac === bc || ab === bc) {
    tipo = "Isósceles";
  }

  const perimetro = ab + ac + bc;

  const semiperimetro = perimetro / 2;
  const area = Math.sqrt(
    semiperimetro *
      (semiperimetro - ab) *
      (semiperimetro - ac) *
      (semiperimetro - bc)
  );

  const anguloA = Math.acos((bc ** 2 + ac ** 2 - ab ** 2) / (2 * bc * ac));
  const anguloB = Math.acos((ab ** 2 + ac ** 2 - bc ** 2) / (2 * ab * ac));
  const anguloC = Math.PI - anguloA - anguloB;

  const angulos = {
    // A: Math.degrees(anguloA),
    // B: Math.degrees(anguloB),
    // C: Math.degrees(anguloC),
    A: anguloA * (180 / Math.PI),
    B: anguloB * (180 / Math.PI),
    C: anguloC * (180 / Math.PI),
  };

  return {
    tipo,
    perimetro,
    area,
    angulos,
  };
}
