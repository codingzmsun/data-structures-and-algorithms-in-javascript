//Implement strStr().
// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    if (needle==='') { return 0; }
    if (haystack===null || needle===null) { return -1; }
    haystack_loop: for (var i=0; i <= haystack.length - needle.length; i++) {
        // Avoid looping needle if first letter doesn't match
        if (haystack.charAt(i) === needle.charAt(0)) {
            for (var j = 1; j < needle.length; j++) {
                if (haystack.charAt(i + j) !== needle.charAt(j)) {
                    continue haystack_loop;
                }
            }
            return i;
        }
    }
    return -1;
};

console.log(strStr('aaaabbcccc','bbc'));