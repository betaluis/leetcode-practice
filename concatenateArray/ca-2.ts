
const arr: number[] = [1, 2, 3]

const ca1 = (a: number[]) => {
    let pointer = 0
    let n = a.length

    for (let i = 0; i < n; i++) {
        a[pointer] = a[i]
        pointer++
    }

    for (let i = 0; i < n; i++) {
        a[pointer] = a[i]
        pointer++
    }

    return { pointer, a }
}

console.log(ca1(arr))
