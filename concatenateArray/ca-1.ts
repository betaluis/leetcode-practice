
const arr: number[] = [1, 2, 3]

const concatenate = (a: number[]) => {
    let pointer = 0
    let n = arr.length

    for (let i = 0; i < n; i++) {
        arr[pointer] = arr[i]
        pointer++
    }

    for (let i = 0; i < n; i++) {
        arr[pointer] = arr[i]
        pointer++
    }

    return { pointer, arr }
}

console.log(concatenate(arr))
