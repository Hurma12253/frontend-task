import React, { FC } from 'react';
import classes from '@styles/home.scss';

interface MenuListItemProps {
    children: DishesInfo;
}

const MenuListItem: FC<MenuListItemProps> = ({ children }) => {
    return (
        <div className={classes.menu__list__item}>
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
