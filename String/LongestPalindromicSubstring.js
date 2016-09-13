/**
 Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000,
 and there exists one unique longest palindromic substring.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = -1, res = "", count, i, j;
    for(var index = 0; index < s.length; index++){
        if(s[index - 1] && s[index] === s[index - 1]){
            continue;
        }
        count = 1;
        i = j = index;
        while(s[j + 1] && s[j + 1] === s[index]){
            j++, count++;
        }
        while(s[i] && s[j] && s[i] === s[j]){
            count += 2;
            i--; j++;
        }
        if(count > max){
            max = count;
            res = s.substring(i + 1, j);
        }
    }
    return res;
};

console.log(longestPalindrome('aabcbafffse'));