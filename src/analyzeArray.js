function analyzeArray(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;

    const min = Math.min( ...array )
    const max = Math.max( ...array )

    const length = array.length;

    const object = {
        average: avg, 
        min: min, 
        max: max, 
        length: length
    }

    return object;
}
module.exports = analyzeArray;