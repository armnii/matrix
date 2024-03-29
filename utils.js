function multiplyMatrices(mat1, mat2) {
    
    // if number of *colomns* of mat1 is NOT equal to number of *rows* of mat2, it returns null
    if (mat1[0].length !== mat2.length){
        return null
    }
    
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result.push([]);
        for (let j = 0; j < mat2[0].length; j++) { 
            result[i][j] = 0
            for (let k = 0; k < mat1[i].length; k++) {
                (result[i][j]) += ((mat1[i][k]) * (mat2[k][j]));
            }
        }
    }
    return result;
}


function printMatrix(matrix) {
    
    if (matrix == null || matrix == undefined) {
        return
    }
    
    let output = "";
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			output += matrix[row][col] + "\t";
		}
		output += "\n";
	}

	console.log(output);
}



module.exports = {
    multiplyMatrices,
	printMatrix
}