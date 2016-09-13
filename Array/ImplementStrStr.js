/**
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Brute force solution: runtime: O(nm), space: O(1)
 */

function implementStrStr(haystack, needle) {
    if (needle.length === 0) { return 0; }
    if (haystack===null || needle===null) { return -1; }
    haystack_loop: for (var i=0; i <= haystack.length - needle.length; i++) {
        for (var j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) !== needle.charAt(j)) {
                continue haystack_loop;
            }
        }
        if(j === needle.length){
            return i;
        }
    }
    return -1;
};
console.log(implementStrStr("abaac","ac"));

