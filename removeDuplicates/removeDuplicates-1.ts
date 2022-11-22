const arr = [1, 2, 2, 3, 3, 4, 4, 4]

const removeDuplicates = (arr: number[]) => {
    let pointer = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== arr[i - 1]) {
            arr[pointer] = arr[i]
            pointer++
        }
    }

    return { pointer, arr }
}

console.log(removeDuplicates(arr))
