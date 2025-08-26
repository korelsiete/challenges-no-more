function toCamelCase(s) {
  s = s.toLowerCase();

  // El regex es la mejor opción en estos casos, quería usar \W
  // Pero no consideraba a los guiones bajos
  const words = s.split(/[^a-zA-Z0-9]+/g);

  // Convirtiendo las palabras a camelCase, excepto la primera
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Y ya de último unirlo con join
  return words.join("");
}
