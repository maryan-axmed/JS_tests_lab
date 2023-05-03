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

const even = function(k){
    if(k % 2 == 0){
        return "true";
    }
}

const odd = function(l){
    if(l % 2 != 0){
        return "odd";
    }
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
