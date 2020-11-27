import { makeAutoObservable } from 'mobx';

class DishesStore {
    dishes: DishesInfo[];

    constructor() {
        makeAutoObservable(this);
        this.dishes = [];
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
}

export default new DishesStore();
