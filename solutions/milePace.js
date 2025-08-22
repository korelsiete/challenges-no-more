function milePace(miles, duration) {
  // Me pareció mejor usar desestructuracion.
  let [m, s] = duration.split(":");

  // Esta seria la respuesta, pero en minutos.
  let avg = (m * 60 + +s) / miles;

  // El módulo (%) me pareció perfecto para esta situación.
  [m, s] = [parseInt(avg / 60), parseInt(avg % 60)];

  // Quería aplicar algo como [m,s].join(:), pero se me hacia más complicado el poner los ceros en la respuesta.
  return `${m <= 9 ? "0" : ""}${m}:${s <= 9 ? "0" : ""}${s}`;
}

/*
Me gustó como quedó, aunque no sé si sea la mejor solución.
Solo voy resolviendo sobre la marcha... Debo mejorar eso.
No trato de encontrar la solución perfecta, óptima o descriptiva,
pero si trataré de que sea más entendible y no tan engorroso.
Todo depende de lo que vaya aprendiendo del lenguaje y sus trucos.
Gracias si lo leiste :o
*/
