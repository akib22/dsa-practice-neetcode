/*
Thought Process: Init a window, if all characters of t is not available in the window then increase the window size and check all character available or not.
If all characters available store the substring and decrease the window size and follow the same process.
If again all characters available then keep the minimum size substring.
*/
function minWindow(s: string, t: string): string {
    if (s.length < t.length) {
        return ""
    }
    
    let freqOfT = new Map<string, number>()

    // getting the frequency of characters
    for (let i = 0; i < t.length; i += 1) {
        if (freqOfT.has(t[i])) {
            freqOfT.set(t[i], freqOfT.get(t[i]) + 1)
        } else {
            freqOfT.set(t[i], 1)
        }
    }

    const checkAllCharAvailable = () => {
        return Array.from(freqOfT.values()).every(val => val <= 0)
    }
    let l = 0
    let r = 0
    let result = ""
    let isAllCharAvailable = false
    while (r < s.length) {

        if (isAllCharAvailable) {
            // decreaseing window size
            if (freqOfT.has(s[l])) {
                freqOfT.set(s[l], freqOfT.get(s[l]) + 1)
            }

            l += 1
        } else if (freqOfT.has(s[r])) {
            freqOfT.set(s[r], freqOfT.get(s[r]) - 1)
        }

        isAllCharAvailable = checkAllCharAvailable()

        if (isAllCharAvailable) {
            // keeping the possible result
            let subStr = s.substring(l, r + 1)
            if (!result) {
                result = subStr
            } else {
                result = result.length < subStr.length ? result : subStr
            }
        } else {
            r += 1
        }
    }

    return result
};
