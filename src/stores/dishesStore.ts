import { makeAutoObservable } from 'mobx';

class DishesStore {
    dishes: DishesInfo[];

    order: Order[];

    constructor() {
        makeAutoObservable(this);
        this.dishes = [];
        this.order = [];
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
        this.order.push({
            product: this.dishes.find((el) => el.id === id) || {
                id: 'none',
                name: 'none',
                photoUrl: 'none',
                priceInDollars: 'none',
            },
            qty,
        });
    }
}

export default new DishesStore();
