/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';
import classes from '@styles/order.scss';
import { observer } from 'mobx-react-lite';
import dishesStore from '@stores/dishesStore';

interface IOrderItem {
    children: Order;
}

const OrderItem: FC<IOrderItem> = ({
    children: {
        product: { name, photoUrl, priceInDollars, id },
        qty,
    },
}) => {
    return (
        <div className={classes.order__items__item}>
            <img
                className={classes.order__items__item__delete}
                onClick={() => dishesStore.removeFromOrder(id)}
                src="/assets/clear.svg"
                alt="clear"
            />
            <img className={classes.order__items__item__image} src={`http://localhost:3030${photoUrl}`} alt={name} />
            <div className={classes.order__items__item__body}>
                <div className={classes.order__items__item__body__name}>{name}</div>
                <div className={classes.order__items__item__body__price}>${priceInDollars}</div>
                <div className={classes.order__items__item__body__hr} />
            </div>
            <div className={classes.order__items__item__qty_container}>
                <img
                    onClick={() => dishesStore.addQty(id)}
                    className={classes.order__items__item__qty_container__up}
                    src="/assets/arrow_up.svg"
                    alt="arrow_up"
                />
                <div className={classes.order__items__item__qty_container__qty}>
                    <span className={classes.order__items__item__qty_container__qty__x}>x</span> {qty}
                </div>
                <img
                    onClick={() => dishesStore.subQty(id)}
                    className={classes.order__items__item__qty_container__down}
                    src="/assets/arrow_up.svg"
                    alt="arrow_up"
                />
            </div>
        </div>
    );
};

export default observer(OrderItem);
