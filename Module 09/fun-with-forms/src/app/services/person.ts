export interface Address {
    street: string;
    city: string;
}

export interface Person {
    username: string;
    email: string;
    fullname: string;
    description: string;
    address: Address;
    children: string[]
}