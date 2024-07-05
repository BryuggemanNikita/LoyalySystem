import { User } from "../User/User";
import { Shop } from "../Shop/Shop";
import { CashRegister } from "../CashRegister/CashRegister";
import { Product } from "../Products/Product";
import { DescountCards } from "../Loyalty/DecountCards";
import { Descount } from "../Loyalty/Descount";
import { Card } from "../Loyalty/Cards";

let card1 = new Card("Bronze", 10);
let card2 = new Card("Silver", 15);
let card3 = new Card("Gold", 20);
let card4 = new Card("Platinum", 25);

let cards = new DescountCards();
cards.pushNewCard(card3);
cards.pushNewCard(card1);
cards.pushNewCard(card2);
cards.pushNewCard(card4);

let shop = new Shop("Лента", new Descount("Карты посетителей", cards));
let user = new User("Oleg");

let pr1 = new Product("Хлеб", 100);
let pr2 = new Product("Вода", 60);
let pr3 = new Product("Черная икра", 5300);
let pr4 = new Product("Красная икра", 700);

shop.getShopSystem().pushProductsInAssortiment(pr1);
shop.getShopSystem().pushProductsInAssortiment(pr2);
shop.getShopSystem().pushProductsInAssortiment(pr3);

shop.getShopSystem().pushNewUserInShopSystem(user);

shop.getShopSystem().pushProductInUserBasket(user, pr1);
shop.getShopSystem().pushProductInUserBasket(user, pr2);

let userInd = shop.getIndexUserInShop(user);

shop.getShopSystem().getUserLoyaltyInShop()[userInd].setDescount(card1);

CashRegister.buy(user, shop);

shop.getShopSystem().pushProductInUserBasket(user, pr3);
shop.getShopSystem().pushProductInUserBasket(user, pr4);
shop.getShopSystem().getUserLoyaltyInShop()[userInd].setDescount(card2);

CashRegister.buy(user, shop);