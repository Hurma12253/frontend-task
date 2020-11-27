import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import classes from '@styles/home.scss';
import dishesStore from '@stores/dishesStore';
import MenuListItem from './MenuListItem';

const MenuList: FC = () => {
    useEffect(() => {
        dishesStore.fetchDishes();
    }, []);

    return (
        <div className={classes.menu__list}>
            {dishesStore.dishes.map((el) => (
                <MenuListItem key={Math.random()}>{el}</MenuListItem>
            ))}
        </div>
    );
};

export default observer(MenuList);
