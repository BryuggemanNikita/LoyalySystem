import {Product} from "../Products/Product";

export class BasketOfProduct {
    private basket: Product[] = [];
    private baskeotCost: number = 0;
    private static ERROR: string = "Такого элемента в корзине нет!";

    public PushProductInBasket(product: Product): void {
        this.basket.push(product);
        console.log(`\nВы добавили в корзину товар: ${product.getName()}, его стоимость: ${product.getCost()} реблей`);
        this.baskeotCost += product.getCost();
    };

    public popProductInBasket(ind: number): void {
        let length: number = this.basket.length;
        let nameProduct = this.basket[ind].getName();
        let costProduct = this.basket[ind].getCost();

        if (ind >= 0 && ind < length) {
            this.basket.splice(ind, 1);
            console.log(`\nВы убрали из корзины ${nameProduct}, Его стоимость составляла: ${costProduct}`);
            this.baskeotCost -= costProduct;
        } else {
            console.log(BasketOfProduct.ERROR);
        };
    };

    public getCostBasket(): number {
        return this.baskeotCost;
    };

    public getBasket(): Product[] {
        return this.basket;
    };
};