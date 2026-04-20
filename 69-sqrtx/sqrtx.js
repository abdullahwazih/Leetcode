/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    
    let l = 1, r = x;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (m * m === x) return m;
        else if (m * m < x) l = m + 1;
        else r = m - 1;
    }
    
    return r;
};