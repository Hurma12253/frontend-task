/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import classes from '@styles/home.scss';
import dishesStore from '@stores/dishesStore';

interface MenuListItemProps {
    children: DishesInfo;
}

const MenuListItem: FC<MenuListItemProps> = ({ children }) => {
    return (
        <div
            tabIndex={0}
            role="button"
            onClick={(e: React.MouseEvent) => dishesStore.addToOrder(children.id, 1)}
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => dishesStore.addToOrder(children.id, 1)}
            className={classes.menu__list__item}>
            <div className={classes.menu__list__item_body}>
                <div className={classes.menu__list__item__body__title}>{children.name}</div>
                <div className={classes.menu__list__item__body__subtitle}>450kcal | 20%</div>
                <div className={classes.menu__list__item__body__price}>${children.priceInDollars}</div>
            </div>
            <img src={`http://localhost:3030${children.photoUrl}`} alt={children.name} className="image" />
        </div>
    );
};

export default MenuListItem;
