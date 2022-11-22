
const t = 'anagram'
const s = 'nagaram'
const x = 'bagaram'

const isValidAnagram = (t: string, s: string) => {
  if (t.length !== s.length) return false

  const counter = {}
  const n = t.length

  for (let i = 0; i < n; i++) {
    if (!counter[t[i]]) counter[t[i]] = 0

    counter[t[i]]++
    counter[s[i]]--
  }

  for (let chr in counter) {
    if (counter[chr] !== 0) return false
  }

  return true
}

console.log(isValidAnagram(s, t))
