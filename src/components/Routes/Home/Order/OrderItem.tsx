import React, { FC } from 'react';
import classes from '@styles/order.scss';
import { observer } from 'mobx-react-lite';

interface IOrderItem {
    children: Order;
}

const OrderItem: FC<IOrderItem> = ({
    children: {
        product: { name, photoUrl, priceInDollars },
        qty,
    },
}) => {
    return (
        <div className={classes.order__items__item}>
            <img className={classes.order__items__item__delete} src="/assets/clear.svg" alt="clear" />
            <img className={classes.order__items__item__image} src={`http://localhost:3030${photoUrl}`} alt={name} />
            <div className={classes.order__items__item__body}>
                <div className={classes.order__items__item__body__name}>{name}</div>
                <div className={classes.order__items__item__body__price}>${priceInDollars}</div>
                <div className={classes.order__items__item__body__hr} />
            </div>
            <div className={classes.order__items__item__qty_container}>
                <img
                    className={classes.order__items__item__qty_container__up}
                    src="/assets/arrow_up.svg"
                    alt="arrow_up"
                />
                <div className={classes.order__items__item__qty_container__qty}>
                    <span className={classes.order__items__item__qty_container__qty__x}>x</span> {qty}
                </div>
                <img
                    className={classes.order__items__item__qty_container__down}
                    src="/assets/arrow_up.svg"
                    alt="arrow_up"
                />
            </div>
        </div>
    );
};

export default observer(OrderItem);
