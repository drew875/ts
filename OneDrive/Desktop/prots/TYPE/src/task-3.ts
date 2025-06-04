const usernames: string[] = ["alice", "bob", "charlie"];
const ratings: number[] = [4.5, 3.8, 5];
interface Product {
    id: number;
    title: string;
}

const product: Product[] =
    [{ id: 1, title: "Phone" },
    { id: 2, title: "Laptop" },
    ]
console.log(usernames);
console.log(ratings);
console.log(product);