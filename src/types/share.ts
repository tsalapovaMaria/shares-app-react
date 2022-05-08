export interface Cell {
    value: number;
    className?: string;
    attributes?: Array<string>;
}

export interface Share {
    amount: Cell;
    price: Cell;
    totalPrice: Cell;
}