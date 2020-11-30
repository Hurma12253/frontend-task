import React, { FC } from 'react';
import classes from '@styles/order.scss';
import cn from 'classnames';
import dishesStore from '@stores/dishesStore';
import { observer } from 'mobx-react-lite';
import OrderItem from './OrderItem';

const Order: FC = () => {
    return (
        <div className={classes.order}>
            <div className={classes.order__title}>Order</div>
            <div className={classes.order__items}>
                {dishesStore.order.length > 0 ? (
                    dishesStore.order.map((el) => <OrderItem key={el.product?.id}>{el}</OrderItem>)
                ) : (
                    <div className={classes.order__items__empty}>
                        <div className={classes.order__items__empty__top_text}>Order is empty, pick something up!</div>
                        <div className={classes.order__items__empty__middle_text}>
                            <div className={classes.order__items__empty__middle_text__top}>Have you ever tried</div>
                            <div className={classes.order__items__empty__middle_text__bottom}>Chimichurry beef ?</div>
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.order__bottom_section}>
                <div className={classes.order__bottom_section__calories}>
                    <div className={classes.order__bottom_section__calories__text}>
                        <div className={classes.order__bottom_section__calories__text__title}>
                            <span className={classes.order__bottom_section__calories__text__title__1}>1250</span>
                            <span className={classes.order__bottom_section__calories__text__title__2}> kcal</span>
                        </div>
                        <div className={classes.order__bottom_section__calories__text__subtitle}>
                            40% of daily calories
                        </div>
                    </div>
                    <div className={classes.order__bottom_section__calories__chart}>
                        <img
                            className={classes.order__bottom_section__calories__chart__1}
                            src="/assets/Calories1.svg"
                            alt="lol"
                        />
                        <img
                            className={classes.order__bottom_section__calories__chart__2}
                            src="/assets/Calories2.svg"
                            alt="kek"
                        />
                        <img
                            className={classes.order__bottom_section__calories__chart__3}
                            src="/assets/CaloriesFire.svg"
                            alt="cheburek"
                        />
                    </div>
                    <div className={classes.order__bottom_section__calories__details_container}>
                        <div className={classes.order__bottom_section__calories__details_container__details}>
                            <img
                                className={classes.order__bottom_section__calories__details_container__details__arrow}
                                src="/assets/arrow_up.svg"
                                alt="kek"
                            />
                            <div className={classes.order__bottom_section__calories__details_container__details__text}>
                                details
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={cn(
                        classes.order__bottom_section__charge,
                        dishesStore.order.length <= 0 ? classes.order__bottom_section__charge__disabled : null
                    )}>
                    ${dishesStore.order.length <= 0 ? 'Unpayable' : `Charge ${dishesStore.sum}`}
                </div>
            </div>
        </div>
    );
};

export default observer(Order);
