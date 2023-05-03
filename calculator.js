const sum = function(a, b){
    return a + b;
};

const subtract = function(c, d){
    return c - d;
}

const multiply = function(e, f){
    return e * f;
}

const divide = function(g, h){
    return g / h;
}

const modulus = function(i, j){
    return i % j;
}

const evenOrOdd = function(k){
    if(k % 2 == 0){
        return "even";
    }
    return "odd";
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    evenOrOdd, 
};
