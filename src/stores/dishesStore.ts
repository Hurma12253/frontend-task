import { makeAutoObservable } from 'mobx';

class DishesStore {
    dishes: DishesInfo[];

    order: Order[];

    constructor() {
        makeAutoObservable(this);
        this.dishes = [];
        this.order = JSON.parse(localStorage.getItem('Order') || '[]');
    }

    fetchDishes() {
        fetch('http://localhost:3030/dishes')
            .then((res) => res.json())
            .then((res) => {
                this.dishes = res.map(
                    (el: any): DishesInfo => ({
                        id: el.id,
                        name: el.name.replace(/^./, el.name.charAt(0).toUpperCase()),
                        photoUrl: el.photo_url,
                        priceInDollars: el.price_in_dollars,
                    })
                );
            });
    }

    addToOrder(id: string, qty: number) {
        const product = this.dishes.find((el) => el.id === id);
        const exists = this.order.find((el) => el.product.id === id);

        if (product && !exists) {
            this.order.push({ product, qty });
        } else if (exists) {
            this.addQty(id);
        }

        this.saveCart();
    }

    removeFromOrder(id: string) {
        this.order = this.order.filter((x) => x.product.id !== id);
        this.saveCart();
    }

    addQty(id: string) {
        const index = this.order.findIndex((el) => el.product.id === id);

        if (index !== -1) {
            this.order[index].qty += 1;
        }

        this.saveCart();
    }

    subQty(id: string) {
        const index = this.order.findIndex((el) => el.product.id === id);

        if (index !== -1) {
            this.order[index].qty -= 1;
        }

        if (this.order[index].qty < 1) {
            this.removeFromOrder(id);
        }

        this.saveCart();
    }

    get sum() {
        return this.order.reduce((acc, el) => acc + el.qty * +el.product.priceInDollars, 0).toFixed(2);
    }

    saveCart() {
        localStorage.setItem('Order', JSON.stringify(this.order));
    }
}

export default new DishesStore();
