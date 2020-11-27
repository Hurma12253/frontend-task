import React, { FC } from 'react';
import classes from '@styles/home.scss';
import MenuList from './MenuList/MenuList';
import Order from './Order/Order';

const HomePage: FC = () => {
    return (
        <div className={classes.home}>
            <div className={classes.menu}>
                <div className={classes.menu__title}>Menu</div>
                <div className={classes.menu__subtitle}>Take your pick from our finest and delicious dishes</div>
                <MenuList />
            </div>
            <Order />
        </div>
    );
};

export default HomePage;
