function recurFib(n) {
    if (n < 2) {
        return n;
    }
    else {
        return recurFib(n-1) + recurFib(n-2);
    }
}
console.log(recurFib(10)); // displays 55

/*optimal: An algorithm designed using dynamic programming starts by solving the simplest subproblem
it can solve, then using that solution to solve more complex subproblems until
the entire problem is solved. The solutions to each subproblem are typically stored in
an array for easy access.
*/

function dynFib(n) {
    //The val array is where we store intermediate results
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
console.log(dynFib(10));

//the definition of an iterative Fibonacci function that doesn’t use an array
function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
console.log(iterFib(10));
