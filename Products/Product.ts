export class Product {
    private name: string;
    private cost: number;
    private static ERROR: string = "Ошибка";

    constructor(name: string, cost: number) {
        let resName = name.trim();
        if (resName !== "") {
            this.name = name;
        } else {
            throw new Error(Product.ERROR);
        };
        if (cost !== undefined && cost > 0) {
            this.cost = cost;
        } else {
            throw new Error(Product.ERROR);
        };
    };

    public getName(): string {
        return this.name;
    };

    public getCost(): number {
        return this.cost;
    };

    public setCost(value: number): void {
        this.cost = value;
    };
};