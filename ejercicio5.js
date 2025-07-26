// Ejercicio 5 de JavaScript (ejercicios avanzados)

// Math.random() saca un número entre 0 y 1 (habría que sumarle 1), lo multiplicamos por las caras del dado y redondeamos todo con Math.floor()

function rollDice(dcaras) {
  const resultado = Math.floor(Math.random() * dcaras) + 1
  console.log('Has sacado un ' + resultado)
  return resultado
}

rollDice(20)
