
// const opts = ['5', '2', 'C', 'D', '+']
// const opts = ["5", "-2", "4", "C", "D", "9", "+", "+"]
const opts = ["1", "C"]

const baseballGame = (opts: Array<string>) => {
    const n = opts.length
    const score: number[] = []

    for (let i = 0; i < n; i++) {

        if (opts[i] === 'C') {
            score.pop()
        } else if (opts[i] === 'D') {
            score.push(score[score.length - 1] * 2)
        } else if (opts[i] === '+') {
            score.push(score[score.length - 1] + score[score.length - 2])
        } else {
            score.push(parseInt(opts[i]))
        }

    }

    console.log({ score })

    let total = 0

    for (let i = 0; i < score.length; i++) {
        total = total + score[i]
    }

    return total
}

console.log(baseballGame(opts))
