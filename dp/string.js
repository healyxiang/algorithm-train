var longestPalindrome = function(s) {
    if (s?.length <= 1) {
        return s
    }
    // [][]
    const len = s.length
    let dp = new Array(len).fill([])
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    let maxLen = 1
    let begin = 0
    for (let L = 2; L <= len; L++) {
        for (let i = 0; i < len; i++) {
            let j = i + L -1;
            if (j >= len) {
                continue
            }
            if (s.charAt(i) !== s.charAt(j)) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.slice(begin, begin + maxLen)
};

let res = longestPalindrome("abcba")
console.log('res:',res)