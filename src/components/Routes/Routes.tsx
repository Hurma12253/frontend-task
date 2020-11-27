import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from '@const/routes';
import Layout from '@components/Layout';

import NoMatch from './NoMatch';
import Home from './Home';

const Routes: FC = observer(() => {
    return (
        <Layout>
            <Switch>
                <Route exact path={routes.HOME}>
                    <Home />
                </Route>

                <Route component={NoMatch} />
            </Switch>
        </Layout>
    );
});

const Router: FC = () => (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

export default Router;
