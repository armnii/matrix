const utils = require("./utils");

let matA = [[1, 4, -2] , [3, 5, -6]]
let matB = [[5, 2, 8, -1], [3, 6, 4, 5], [-2, 9, 7, -3]]

utils.printMatrix(utils.multiplyMatrices(matA, matB))


/*
The example of the two matrices (matA and matB) were taken from the following link:

https://youtu.be/vzt9c7iWPxs?t=1008

*/