module.exports = function reverse (n) {
    let a = Math.abs(n) ;
    a = a.toString() ;   
    let arr = a.split('') ;
    arr.reverse() ;
    return +arr.join('') ;    
}

