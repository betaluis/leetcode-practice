const s = 'anagram'
const t = 'nagaram'
const p = 'baragam'

const isValidAnagram = (s: string, t: string) => {
    if (s.length !== t.length) return false

    const count: Record<string, number> = {}
    const n = s.length

    for (let i = 0; i < s.length; i++) {
        if (!count[s[i]]) count[s[i]] = 0
        if (!count[t[i]]) count[t[i]] = 0

        count[s[i]]++
        count[t[i]]--
    }

    for (let chr in count) {
        if (count[chr] !== 0) return false
    }

    return true
}

console.log(isValidAnagram(s, t))
console.log(isValidAnagram(s, p))
