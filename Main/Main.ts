import { User } from "../User/User";
import { Shop } from "../Shop/Shop";
import { CashRegister } from "../CashRegister/CashRegister";
import { Product } from "../Products/Product";
import { DescountCards } from "../Loyalty/DecountCards";
import { Descount } from "../Loyalty/Descount";


let shop = new Shop("Лента", new Descount("Карты посетителей", new DescountCards(10, 15, 20)));
let user = new User("Oleg");

let pr1 = new Product("Хлеб", 100);
let pr2 = new Product("Вода", 60);
let pr3 = new Product("Черная икра", 5300);

shop.getShopSystem().pushProductsInAssortiment(pr1);
shop.getShopSystem().pushProductsInAssortiment(pr2);
shop.getShopSystem().pushProductsInAssortiment(pr3);

shop.getShopSystem().pushNewUserInShopSystem(user);

shop.getShopSystem().pushProductInUserBasket(user, 0);
shop.getShopSystem().pushProductInUserBasket(user, 1);

let userInd = shop.getIndexUserInShop(user);

let desc = shop.getDescount().getCards().getBronzeCard();

shop.getShopSystem().getUserLoyaltyInShop()[userInd].setDescount(desc);

CashRegister.buy(user, shop);

shop.getShopSystem().pushProductInUserBasket(user, 2);

CashRegister.buy(user, shop);