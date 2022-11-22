import { argv0 } from "process"

const arr = [1, 2, 3, 4, 5]
const elementToRemove = 3

const removeElement = (array: number[], elementToRemove: number) => {
    let pointer = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elementToRemove) {
            array[pointer] = array[i]
            pointer++
        }
    }

    return { pointer, array }
}

console.log(removeElement(arr, elementToRemove))
