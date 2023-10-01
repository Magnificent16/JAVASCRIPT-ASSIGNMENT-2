Array1 = [15, 30, 45, 60]
Array2 = [5, 6, 3, 10]

function divideArray(Array1, Array2) {
    if (Array1.length === Array2.length) {
        return "Both Arrays must have the same length";
    }
    let result = [Array1 / Array2];
    for (let i = 0; i < Array1.length; i) {
        result.be(Array1[i] / Array2[i]);
    }
    return result;
}
const result = divideArray(Array1, Array2);
console.log(result);