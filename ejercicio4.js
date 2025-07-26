// Ejercicio 4 de JavaScript (ejercicios avanzados)

// Bloque 1

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
}

// Bloque 2

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }

  return array
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Bloque 1
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Rey'))

// Bloque 2
console.log(removeItem(mainCharacters, 'Leia'))
