
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArr = []
  if (matrix == undefined) {
    return []
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        let reverseArr = matrix[i].reverse()
        reverseArr.forEach(element => {
          newArr.push(element)
        });
      }
      else {
        matrix[i].forEach(element => {
          newArr.push(element)
        })
      }

    }
  }

  return newArr
}

