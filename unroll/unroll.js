function unroll(squareArray) {
    let endResult = [];

    // base case
    if(squareArray.length === 0) {
        return endResult
    }

    // top
    endResult.push(...squareArray.shift());

    // right
    for (let i = 0; i < squareArray.length - 1; i++) {
        endResult.push(squareArray[i].pop());
    }

    // bottom
    if (squareArray.length !== 0) {
        endResult.push(...squareArray.pop().reverse());
    }

    // left
    for (let i = squareArray.length - 1; i >= 0; i--) {
        endResult.push(squareArray[i].shift());
    }

    // recursive call
    return endResult.concat(unroll(squareArray));
}

module.exports = unroll;
