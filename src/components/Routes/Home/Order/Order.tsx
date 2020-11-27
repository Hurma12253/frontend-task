import React, { FC } from 'react';
import classes from '@styles/order.scss';

const MenuListItem: FC = () => {
    return (
        <div className={classes.order}>
            <div className={classes.order__title}>Order</div>
        </div>
    );
};

export default MenuListItem;
