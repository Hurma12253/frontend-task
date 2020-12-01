import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import classes from '@styles/home.scss';
import cn from 'classnames';
import dishesStore from '@stores/dishesStore';
import MenuListItem from './MenuListItem';

const MenuList: FC = () => {
    useEffect(() => {
        dishesStore.fetchDishes();
    }, []);

    return (
        <div className={cn(classes.menu__list, classes.enabled)}>
            {dishesStore.dishes.map((el) => (
                <MenuListItem key={Math.random()}>{el}</MenuListItem>
            ))}
        </div>
    );
};

export default observer(MenuList);
