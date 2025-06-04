function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
getFirstElement([1, 2, 3]);           // 1
getFirstElement(["a", "b", "c"]);     // "a"
getFirstElement([true, false, true]); // true

const mixed = getFirstElement([1, "2", true]);
const mixedd = getFirstElement<number | string | boolean>([1, "2", true])


